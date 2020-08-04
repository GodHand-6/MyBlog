<template>
  <div class="box" style="height:250px">
    <div style="background-color: #bfbfbf;height: 50px;width: 300px;">
      <div style="padding: 15px 0px 15px 30px">
        <i class="el-icon-price-tag"></i>
        标签 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;
        &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; <router-link to="/tag" class="href">more >></router-link>
      </div>
    </div>
    <hr color="#19D992" size="4px" style="margin-top: 0">
    <div style="margin-left: 10px;">
      <el-tag>C</el-tag>
      <el-tag type="success">C++</el-tag>
      <el-tag type="info">Java</el-tag>
      <el-tag type="warning">servlet</el-tag>
      <el-tag type="danger">jsp</el-tag>
      <el-tag>spring</el-tag>
      <el-tag type="success">spring mvc</el-tag>
      <el-tag type="info">mybatis</el-tag>
      <el-tag type="warning">hibernate</el-tag>
      <el-tag type="danger">jpa</el-tag>
      <el-tag>springboot</el-tag>
      <el-tag type="success">springcloud</el-tag>
      <el-tag type="info">jdbc</el-tag>
      <el-tag type="warning">maven</el-tag>
      <el-tag type="danger">git</el-tag>
      <el-tag>html</el-tag>
      <el-tag type="success">css</el-tag>
      <el-tag type="info">js</el-tag>
      <el-tag type="warning">vue</el-tag>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Tag"
    }
</script>

<style>
</style>
