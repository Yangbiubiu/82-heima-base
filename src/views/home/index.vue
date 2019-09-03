<template>
  <!-- 最外层容器 -->
  <el-container>
    <!-- 左侧导航 -->
    <el-aside style='width:200px;background-color:#323745;overflow: hidden'>
      <layout-aside></layout-aside>
    </el-aside>
    <!-- 右侧 -->
    <el-container>
      <!-- 头部 -->
      <el-header>
        <!-- 头部组件 -->
        <layout-header></layout-header>
      </el-header>
      <!-- 主要区域 -->
      <el-main style='margin:0;padding:0'>
       <router-view></router-view>
      <!-- 放二级路由的内容的容器 -->
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

// //1.引入组件 在main.js中已经引用全局注册了  下边的局部注册不用写
// import layoutAside from '../../components/home/layout-aside.vue'
// import layoutHeader from '../../components/home/layout-header.vue'

export default {
  //2.注册组件 在main.js中已经引用全局注册了  下边的局部注册不用写
  // components:{
  //   'layout-aside':layoutAside,
  //   'layout-header':layoutHeader
  // }


//day03 权限思考------:如果在组件的钩子函数(created,mounted)里去拦截 ,就意味着 路由已经进入了(已经晚了)
// 所以在路由发生变化时 进行拦截是最恰当的 => 导航守卫来守卫我们的导航
}
</script>

<style>
</style>