import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import router from './permission'// 把./permission（里边有根据导航守卫验证token拦截后的新router）导进来
import ElementUI from 'element-ui'

// import Component from './components/index'//相当于下边 index可忽略不写
import Component from './components' // 自己注册的全局自定义组件
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import './style/index.less' // 引入初始化样式 包括 margin padding li
import axios from './utils/axios.config'// 引入axios插件  // 引入专门处理axios拦截器 请求拦截器 响应拦截器的'./utils/axios.config' 替换掉axios插件

Vue.prototype.$axios = axios // 给Vue对象的原型属性(Vue中属性都以$开头)赋值axios 那么所有vue实例自动拥有$axios

Vue.config.productionTip = false
Vue.use(ElementUI) // 实例化Vue前引入 全局注册elementUI组件 任意位置都可以使用
Vue.use(Component) // 实例化Vue前注册引用 自己写的全局注册自定义组件
// Vue.use(axios) // 用Vue.use的方法去执行  与 ./utils/axios.config相关链
new Vue({ // 实例化Vue
  router,
  render: h => h(App)
}).$mount('#app')
