<template>
  <!-- 用el-row el-col -->
  <el-row class="layout-header" type="flex" justify="space-between">
    <!-- span是给col的宽度  elementUI将页面分为24分 -->
    <el-col class="left" :span="6">
      <i class="el-icon-s-unfold icon"></i>
      <span>江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <el-col class="right" :span="3">
  <!-- 属性不给:就相当于字符串  
      - 正常方式中 引用图片 => 路径
      - vue=> 引用图片 => 字符串 (文件)
      三元表达式 =>不确定图片是否一定会使用=> 图片不会自动转成base64
  -->
      <img class="head-img" :src="userInfo.photo ? userInfo.photo : defaultImg" alt="">
<!-- trigger elementUI组件自带 -->
      <el-dropdown trigger="click" @command="handleMenuItem">
        <!-- 匿名插槽 -->
        <span class="el-dropdown-link">
          {{userInfo.name}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>

        <!-- 具名插槽 -->
        <el-dropdown-menu slot="dropdown">
           <!-- command='xxx' 为了分辨点击了哪个-->
        <el-dropdown-item command='account'>个人信息</el-dropdown-item>
        <el-dropdown-item command='git'>git地址</el-dropdown-item>
        <el-dropdown-item command='lgout'>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data () { 
    return {
      userInfo: {},//定义一个空对象
      // - 正常方式中 引用图片 => 路径
      // - vue=> 引用图片 => 字符串 (文件)
      // 三元表达式 =>不确定图片是否一定会使用=> 图片不会自动转成base64
      defaultImg: require('../../assets/img/avatar.jpg') // 自定义变量defaultImg 转成base64字符串
      }
    },
  methods: {
    // 获取用户数据
    getUserInfo () {
      //  axios.config.js中已经引用axios拦截器-统一处理请求token 以下1. 2.代码不用写了
      // let token = window.localStorage.getItem('user-token') // 1.获取token
      this.$axios({
        url: '/user/profile',
        // headers: { 'Authorization': `Bearer ${token}` }// 2.注入token
      }).then(result => {
         //debugger  与‘./utils/axios.config’相关链 测试先执行axios.config里断点还是者的断点（为了查看是否拦截成功）
        // console.log(result)// 打印请求后返回的data数据 // 与‘./utils/axios.config’相关链 响应拦截器中在 .then（.catch promis对象方法）之前拿到了数据 响应拦截器中 return 啥 就返回 啥  (result的值就为啥) 
        // this.userInfo = result.data.data//获取用户数据并赋值给空对象
        this.userInfo = result.data//获取用户数据并赋值给空对象 与‘./utils/axios.config’相关链 响应拦截器中 return啥就返回啥(result的值就为啥)
      })
    },  
      // 跳转到登录页=>成功的标志是token=>退出的标志是清除token
      // 监听 el-dropdown中的command事件,还要给el-dropdown-item 一个command属性
  // 点击菜单项触发的方法/事件 用户可以通过相应的菜单项key(自定属性名)进行不同的操作
    handleMenuItem (command) {//固定写法
    // alert(command)
    if (command === 'account') {//command='xxx' 为了分辨点击了哪个 xxx为自定属性名
        // 账户信息
      } else if (command === 'git') {
        // git地址
        window.location.href = 'https://github.com/shuiruohanyu/82heimatoutiao' // 跳转到xxx页面 改变当前的地址
      } else {
        // 退出  
        //  window.localStorage.clear()清空缓存 清除所有的缓存  只能清除自己当前项目的缓存
        window.localStorage.clear() // 点击退出可清除token缓存 退出的标志是清除token
        this.$router.push('/login') // 跳转到登录页
      }
      // console.log(command)
    }
  },
  created () {
    this.getUserInfo()
  } 
}
</script>

<style  lang='less' scoped>
.layout-header {
  padding: 8px 0;
  .left {
    .icon {
      font-size: 22px;
      margin-right: 3px;
    }
    display: flex; //flex布局
    align-items: center; //flex布局的侧轴(纵轴)方向水平居中对齐
  }
  .right {
    display: flex; //flex布局
    align-items: center; //flex布局的侧轴(纵轴)方向水平居中对齐
    .head-img {
      border-radius: 50%;
      margin-right: 5px;
      width: 40px;
      height: 40px;
    }
  }
}
</style>