// 引入组件
import layoutAside from './home/layout-aside'
import layoutHeader from './home/layout-header'

// 所有自定义组件的插件
export default {
  install: function (Vue) {
    Vue.component('layout-aside', layoutAside) // 注册 全局左侧导航组件
    Vue.component('layout-header', layoutHeader) // 注册全局头部组件
  }
}
