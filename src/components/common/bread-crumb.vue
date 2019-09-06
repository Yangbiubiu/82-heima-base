<template>
<!-- 定义一个公共的面包屑组件 给有类似的页面结构调用 例：首页>后续内容  -->
<!-- separator 分离器  separator=">" 用">"分离开 例：首页>后续内容 -->
  <el-breadcrumb separator=">">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>
        <!-- 这个区域是活动的 自定义一个具名插槽 name='xxx'-->
      <slot name='title'></slot>
  </el-breadcrumb-item>
</el-breadcrumb>
</template>

<script>
export default {

}
</script>

<style>

</style>
