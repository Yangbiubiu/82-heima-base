<template>
  <!-- 用el-row el-col -->
  <el-row class="layout-header" type="flex" justify="space-between">
    <!-- span是给col的宽度  elementUI将页面分为24分 -->
    <el-col class="left" :span="6">
      <i class="el-icon-s-unfold icon"></i>
      <span>江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <el-col class="right" :span="3">
      <!-- 属性不给:就相当于字符串 -->
      <img class="head-img" src="../../assets/img/avatar.jpg" alt />
<!-- trigger elementUI组件自带 -->
      <el-dropdown trigger="click">
        <!-- 匿名插槽 -->
        <span class="el-dropdown-link">
          下拉菜单
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>

        <!-- 具名插槽 -->
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item >个人信息</el-dropdown-item>
          <el-dropdown-item >git地址</el-dropdown-item>
          <el-dropdown-item >退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>
<script>
export default {};
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