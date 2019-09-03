import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import Login from './views/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/home'// 一登陆默认进入home页 
    
    },
    {
      path: '/home', // views里先配置好<router-view> 在这引入保存views路径
      name: 'home',
      component: Home
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
