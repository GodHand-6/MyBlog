<template>
  <div id="app" style="top: 0;">
    <el-row>
      <Head></Head>
    </el-row>

    <el-row v-cloak style="background-image: url(http://localhost:8080/static/Main1.jpg);">
      <router-view></router-view>
      <br>
    </el-row>

    <el-row>
      <Footer></Footer>
    </el-row>
  </div>
</template>

<script>
    import Footer from "./view/module/footer/Footer";
    import Head from "./view/module/head/Head";

    export default {
        name: 'App',
        components: {Footer, Head}
    }
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
    border: 0;
  }

  .el-radio-button__orig-radio:checked+.el-radio-button__inner{
    background-color: white!important;
    border-color: #00B5AD!important;
    color: #00B5AD!important;
  }

  a:link { color: black; text-decoration: none; }/* 未访问的链接 */
  a:visited { color: black; text-decoration: none; } /* 已访问的链接 */
  a:hover { color: #00B5AD; text-decoration: none; }/* 鼠标移动到链接上 */
  a:active { color: black; } /* 选定的链接 */
</style>
