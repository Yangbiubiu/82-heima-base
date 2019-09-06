<template>
  <el-card>
    <bread-crumb slot="header">
      <template slot="title">
<!-- 具名插槽 之前已经在公共组件中定义过一个公共的面包屑组件 给有类似的页面结构调用 例：首页>后续内容(素材管理)  -->
        素材管理
      </template>
    </bread-crumb>
   <!-- activeName默认选中 跟name后得值相关链 elementUI组件的方法 -->
    <el-tabs v-model="activeName"  @tab-click="handleClick">
     <el-tab-pane label="全部素材" name="all">全部
        <!-- 全部素材的内容 -->
     </el-tab-pane>
     <el-tab-pane label="收藏图片" name="collect">收藏
         <!-- 收藏素材的内容 -->
     </el-tab-pane>
 </el-tabs>
  </el-card>
</template>

<script>
export default {
    data(){
        return{
            activeName:'all'
        }
       
    }
};
</script>

<style>
</style>