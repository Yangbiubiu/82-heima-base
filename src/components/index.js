// 引入组件
import layoutAside from './home/layout-aside'
import layoutHeader from './home/layout-header'
import breadCrumb from './common/bread-crumb'

// 所有自定义组件的插件 统一全局注册插件的使用方式Vue.use
export default {
  install: function (Vue) {
    Vue.component('layout-aside', layoutAside) // 注册 全局左侧导航组件
    Vue.component('layout-header', layoutHeader) // 注册全局头部组件
    Vue.component('bread-crumb', breadCrumb) // 注册面包屑组件
    //  类似
    // 1.引入组件 在main.js中已经引用全局注册了  下边的局部注册不用写
    // import layoutAside from '../../components/home/layout-aside.vue'
    // import layoutHeader from '../../components/home/layout-header.vue'

  // 2.注册组件 在main.js中已经引用全局注册了  下边的局部注册不用写
  // components:{
  //   'layout-aside':layoutAside,
  //   'layout-header':layoutHeader
  // }
  }
}
