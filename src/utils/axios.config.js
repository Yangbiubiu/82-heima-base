// 专门处理axios拦截器 请求拦截器 响应拦截器的
// 在main.js中引入
import axios from 'axios' // 1.引入axios插件
import router from '../permission' // 引入router或者permission 都行import router from '../router'
import { Message } from 'element-ui' // 引入 Message消息提示 elementUI组件
import jsonBigInt from 'json-bigint'// 引入json-bigint  npm的包后端传回的id数字超过了前端的最大安全数字的限制,导致JSON.parse以及其他运算失败.需要第三方的转化包,

// main.js中拿出来的
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 赋值基础地址

// `transformResponse` 在传递给 then/catch 前，允许修改响应数据
axios.defaults.transformResponse = [function (data) {
  // data 是响应回来的字符串
  return jsonBigInt.parse(data)
}]

// 2.请求拦截器 （在axios请求发出前,对axios的配置项处理注入了token,相当于所有的接口都不需要再填写token headers属性了）
axios.interceptors.request.use(function (config) { // interceptors 拦截器  request 请求体
  // config 是axios的默认请求配置 和传入的配置 结合出来的 (request + respone)
  let token = window.localStorage.getItem('user-token')// 获取 token
  config.headers['Authorization'] = `Bearer ${token}` // 统一注入token
  // 控制台显示 headers: {Accept: "application/json, text/plain, */*",  Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleH…J1 (token的值)
  //   debugger// debugger 断点
  return config // 必须将config return（要拿config去加载数据 不return config无法返回数据）
}, function () {})

// 响应拦截器
axios.interceptors.response.use(function (response) {
  // debugger
  // 对响应数据做处理
  //  return xx就返回值为xx  例return 1 返回1 可以改变axios的返回响应结果
  // 必须将response return（response为原来请求返回的响应结果在 then（catch promis对象方法）之前拿到了）
  // return response.data // 解除一层data 见'layout-header.Vue'中.then()里的 result

  return response.data ? response.data : {} // 万一delete接口没有返回数据 给它一个空对象
}, function (error) { // 可以不用写'layout-header.Vue'中.catch() 统一处理错误数据 不用每次调接口都处理catca(login页用户输入填写的不正确数据)
// 当axios请求的响应数据 状态码不正确时,不会进去到响应拦截器 会进入到 响应拦截器的第二个参数
  let status = error.response.status // 取状态码
  let message = '' // 定义一个空变量
  switch (status) {
    case 400:
      message = '请求参数错误'
      break
    case 403:
      message = '用户非实名认证用户，无权限登录'
      break
    case 507:
      message = '服务器或数据库异常'
      break
    case 404:
      message = '手机号不正确'
      break
    case 401:
      window.localStorage.clear() // 因为token有可能过期 清除垃圾token
      router.push('/login') // 强制跳转login  重新登陆获取新的token this.$router.push()
      break
    default:
      message = '未知错误'
      break
  }
  Message({ type: 'warning', message }) // message=>message:message简写 elementUI组件的Message消息提示
  return new Promise(function () {}) // 直接返回一个promise 表示错误已经被处理掉 相当于强行截止错误
})
export default axios // 4.导出模板

// 另一种方法  再在main.js中Vue.use()一下install里边的方法
// export default {
//   install: function (Vue) {    // 简写: install (Vue) {
//     Vue.prototype.$axios = axios // 给Vue对象的原型属性赋值 那么所有vue实例自动拥有$axios
//   }
// }
