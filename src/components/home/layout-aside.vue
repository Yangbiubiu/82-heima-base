<template>
  <div class='layout-aside'>
      <div class='title'>
          <img src="../../assets/img/logo_admin.png" alt="">
      </div>

<!-- el-menu支持路由/router模式,用router(布尔值)属性设置即可
router 和 :router="true"的功能是一样的 -->

    <el-menu
      background-color="#323745"
      text-color="#adafb5"
      style='width:201px'
      active-text-color="#ffd04b"
      router
      >
      <!-- el-menu-item中的index作为路由的path使用 -->
      <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <!-- el-submenu是有折叠的菜单 index='1' 为了不一点击两个都出现下拉 -->
      <el-submenu index='1'>
      <!-- el-submenu  element UI插件官方定义具名插槽 title -->
        <template slot='title' > 
      <!-- element UI插件官方搜索图标 -->
            <i class="el-icon-s-order"></i>
            <span>内容管理</span>
        </template>
         <el-menu-item index="/home/publish">
             发布文章
         </el-menu-item>
         <el-menu-item index="/home/articles">
             内容列表
         </el-menu-item>
        <el-menu-item index="/home/comment">
             评论管理
         </el-menu-item>
         <el-menu-item index="/home/material">
             素材管理
         </el-menu-item>
      </el-submenu>

 <!-- el-submenu是有折叠的菜单 -->
       <el-submenu index='2'><!-- el-submenu是有折叠的菜单 index='2' 为了不一点击两个都出现下拉 -->
         <!-- el-submenu  element UI插件官方定义具名插槽 title -->
          <template slot='title'>
         <!-- element UI插件官方搜索图标 -->
            <i class="el-icon-s-custom"></i>
            <span>粉丝管理</span>
          </template>

           <!-- 具名插槽 下边有匿名小插槽-->
         <el-menu-item index='/home/fansdata'>
             图文数据
         </el-menu-item>
         <el-menu-item index='/home/fansinfo'>
             粉丝概况
         </el-menu-item>
        <el-menu-item  index='/home/fanslist'>
             粉丝列表
         </el-menu-item>
         <el-menu-item index='/home/fansimg'>
             粉丝画像
         </el-menu-item>
      </el-submenu>


      <el-menu-item index="/home/account">
        <i class="el-icon-s-tools"></i>
        <span slot="title">账户信息</span>
      </el-menu-item>
  </el-menu>
  </div>
</template>

<script>
export default {

};
</script>

<style lang='less' scoped>
  .layout-aside {
       width: 200px;
       height: 100vh;
       background-color: #323745;
       .title {
           text-align: center;
           background-color:  #2e2f32;
           padding: 10px 0;
           img {
               height: 30px;
           }
       }
  }
</style>