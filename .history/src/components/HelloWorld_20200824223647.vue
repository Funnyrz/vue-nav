<template>
  <div class="hello">
    < div > 
  < b-navbar  可切换 = “ lg”  类型 = “暗”  变量 = “信息” > 
    < b-navbar-brand  href = “＃” >导航栏</ b-navbar-brand >

    < b-navbar-toggle  target = “ nav-collapse” > </ b-navbar-toggle >

    < b-collapse  id = “ nav-collapse”  is-nav > 
      < b-navbar-nav > 
        < b-nav-item  href = “＃” >链接</ b-nav-item > 
        < b-nav-item  href = “＃”  禁用 >禁用</ b-nav-item > 
      </ b-navbar-nav >

      <！-右对齐的导航项-> 
      < b-navbar-nav  class = “ ml-auto” > 
        < b-nav-form >> 
          < b-form-input  size = “ sm”  class = “ mr-sm- 2“  占位符 = ”搜索“ > </ b-form-input > 
          < b-按钮 大小 = ” sm“  类 = ” my-2 my-sm-0“  类型 = ”提交“ >搜索</ b-按钮 > 
        </ b-nav-form >

        < b-nav-item-dropdown  文本 = “  右”“ Lang” > 
          < b-dropdown-item  href = “＃” > ZH </ b-dropdown-item > 
          < b-dropdown-item  href = “＃” > ES < / b-dropdown-item > 
          < b-dropdown-item  href = “＃” > RU </ b-dropdown-item > 
          < b-dropdown-item  href = “＃” > FA </ b-dropdown-item > 
        </b-nav-item-下拉菜单 >

        < b-nav-item-dropdown  右侧 > 
          <！-使用'button-content'插槽-> 
          < 模板 v-slot：button-content > 
            < em >用户</ em > 
          </ template > 
          < b-dropdown -item  href = “＃” >配置文件</ b-dropdown-item > 
          < b-dropdown-item  href = “＃” >注销</ b-dropdown-item > 
        </ b-nav-item-dropdown > 
      </ b-navbar-nav > 
    </b-collapse > 
  </ b-navbar > 
</ div >
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
