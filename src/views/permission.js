// 任何页面 => home以及下面二级路由的时候 => 判断有没有token => 有token =>next()  没有token => next("/login")

import router from './router' // 导航守卫拦截后的新router
router.beforeEach(function (to, from, next) {
  // 如果要去的地址以/home为起始 就说明需要判断当前是不是登录 判断token
  if (to.path.startsWith('/home')) { // to.path要去的地址路径  .startsWith(查询寻内容)查询是否以xx开头
    let token = window.localStorage.getItem('user-token')
    if (token) {
      // 直接放行
      next()// 获取token如果有就放行
    } else {
      // 如果没有/home 可以认为你是安全的 不需要控制的页面
      next('/login') // 强制跳转login
    }
  } else {
    // 如果没有/home 可以认为你是安全的 不需要控制的页面
    next()
  }
})
export default router // 导出 自定义的router模板
