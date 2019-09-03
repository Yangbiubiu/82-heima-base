import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import Login from './views/login'
import Main from './views/home/main'

Vue.use(Router)

export default new Router({
  routes: [// 配置路由表
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/home'
      // 一登陆默认进入home页
    },
    {
      path: '/home', // views里先配置好<router-view> 在这引入保存views路径
      name: 'home',
      component: Home,
      children: [{
        // 二级路由的地址如果以斜杠‘/’开头,就会从根上计算你的路径 （例如: /a=>路径为 /a）
        // 如果不以斜杠开头就会从你的父路由上进行追加 默认二级路由的简写就是什么也不写
        path: '', // 默认的二级路由的地址 path为空串 用了嵌套路由
        component: Main
      }]
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
