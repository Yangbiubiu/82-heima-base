<template>
  <!-- 最外层容器 -->
  <el-container>
    <!-- 左侧导航 -->
    <el-aside style='width:200px;background-color:#323745'>
      <layout-aside></layout-aside>
    </el-aside>
    <!-- 右侧 -->
    <el-container>
      <!-- 头部 -->
      <el-header>
        <!-- 头部组件 -->
        头部
      </el-header>
      <!-- 主要区域 -->
      <el-main style='margin:0;padding:0'>
       主体
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

//1.引入组件
import layoutAside from '../../components/home/layout-aside.vue'

export default {
  //2.注册组件
  components:{
    'layout-aside':layoutAside
  }
}
</script>

<style>
</style>