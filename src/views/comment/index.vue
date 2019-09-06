<template>
  <el-card>
    <!-- 插槽内容 => 标题 -->
    <bread-crumb slot="header">
      <!-- 面包屑的具名插槽 -->
      <template slot="title">评论列表</template>
    </bread-crumb>
    <!-- 表格 需要数据 :data-->
    <el-table :data="list">

       <el-table-column width="700" label="标题" prop="title"></el-table-column>
               <!-- formatter是el-table-column属性  -->
   <!-- :formatter="自定义函数名"-->
      <el-table-column :formatter="formatter" label="评论状态" prop="comment_status"></el-table-column>
      <el-table-column label="总评论数" prop="total_comment_count"></el-table-column>
      <el-table-column label="粉丝评论数" prop="fans_comment_count"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="obj">  
<!-- el-table-column中作用域插槽 =>父组件模板中定义变量slot-scope='obj' => row,column,$index,store的集合 
=> obj.row(取到行数据 => 根据行数据进行状态区分) -->

            <!-- 父组件模板中 用slot-scope="obj" => obj => 所有属性的集合  obj.name1    -->
            <el-button size="small" type="text">修改评论</el-button>
<!-- 通过父组件的slot-Scoped可以获取到子组件row的状态值来显示颜色样式 和 显示关闭或打开
(<slot :row="row" :column="column"></slot> elementUI做的子组件)  
注册按钮点击事件openOrClose()中传入参数obj.row => 取到当前的行obj.row的数据 -->
            <el-button
             @click="openOrClose(obj.row)" 
             size="small" :style="{color: obj.row.comment_status ? '#E6A23C' : '#409EFF'}"
            type="text">{{obj.row.comment_status ? '关闭评论' : '打开评论'}}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  },
  methods: {  
   // 打开或者关闭评论
    openOrClose (row) {
      let mess= row.comment_status ? '关闭' : '打开'
      this.$confirm(`您是否要${mess}评论?`, '提示').then(() => {
          // 写调用接口
          this.$axios({
            method:'put',
            url: '/comments/status',
            // 饿了么组件里的必写参数article_id  allow_comment是否允许评论（boolean）
             params: { article_id: row.id.toString() }, // 传递articleId参数
          data: { allow_comment: !row.comment_status } // 取反 因为当前如果是true  只能改成false , 如果是false 改成true
          }).then(result => {
          this.getComments() // 成功之后 重新调用 拉取数据的方法 => 前后台同步
        })
      })
    },
  formatter (row) {// "formatter"为自定义的函数名 row有多少行执行多少次   
    // return 123 
 // 用el-table-column属性formatter可以自定义显示内容return什么就显示什么
 // 而正好elementUI组件中=> el-table=> el-table-column无法显示布尔类型的数据 
 // 取到行数据row.comment => 根据行数据进行状态区分)
        return row.comment_status ? '正常' : '关闭'
    },
    getComments() {
      // query参数 就相当于get参数 路径参数 url参数 params
      // body 路径参数  data
      this.$axios({
        url: "/articles",
        params: { response_type: "comment" }
      }).then(result => {
        // console.log(result); 所有评论的文章们
         this.list = result.data.results
      });
    }
  },
  created() {
    this.getComments();
  }
};
</script>

<style>
</style>