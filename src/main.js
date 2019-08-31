import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'  // 引入UI
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
Vue.use(ElementUI)// 全局注册elementUI组件 任意位置都可以使用
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')