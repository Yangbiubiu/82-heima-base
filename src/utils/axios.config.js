// 专门处理axios拦截器 请求拦截器 响应拦截器的
// 在main.js中引入
import axios from 'axios' // 1.引入axios插件
// main.js中拿出来的
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 赋值基础地址

// 2.请求拦截器 （在axios请求发出前,对axios的配置项处理注入了token,相当于所有的接口都不需要再填写token headers属性了）
axios.interceptors.request.use(function (config) { // interceptors 拦截器  request 请求体
  // config 是axios的默认请求配置 和传入的配置 结合出来的 (request + respone)
  let token = window.localStorage.getItem('user-token')// 获取 token
  config.headers['Authorization'] = `Bearer ${token}` // 统一注入token
  // 控制台显示 headers: {Accept: "application/json, text/plain, */*",  Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleH…J1 (token的值)
  //   debugger// debugger 断点
  return config // 必须将config return（要拿config去加载数据 不return config无法返回数据）
}, function () { })

// 响应拦截器 （）
axios.interceptors.response.use(function (response) {
  debugger
  // 对响应数据做处理
  //  return xx就返回值为xx  例return 1 返回1 可以改变axios的返回响应结果
  // 必须将response return（response为原来请求返回的响应结果在 then（catch promis对象方法）之前拿到了）
  // return response.data // 解除一层data 见'layout-header.Vue'中.then()里的 result

  return response.data ? response.data : {} // 万一delete接口没有返回数据 给它一个空对象
})
export default axios // 4.导出模板

// 另一种方法  再在main.js中Vue.use()一下install里边的方法
// export default {
//   install: function (Vue) {    // 简写: install (Vue) {
//     Vue.prototype.$axios = axios // 给Vue对象的原型属性赋值 那么所有vue实例自动拥有$axios
//   }
// }
