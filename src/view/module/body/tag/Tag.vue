<template>
  <div class="box">
    <div style="margin-top: 10px">
      <strong style="color: #006c80;font-size: 20px;">
        &nbsp;&nbsp;
        标签
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <strong style="color: black;font-size: 18px">
          共 {{26}} 个
        </strong>
        <hr color="#bfbfbf" size="1px" style="margin-top: 10px;">
      </strong>
      <br>
    </div>
    <div>
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
      <hr color="#00B5AD" size="4px" style="margin-top: 30px;">
    </div>
    <div style="height: 650px">
      <img src="../../../../../static/star.jpg" width="880px" height="640" style="margin: 10px">
    </div>
    <hr color="#bfbfbf" size="1px" style="margin-top: 10px;">
    <div>
      <el-button type="primary" icon="el-icon-arrow-left" size="small" style="margin-left: 200px">上一页
      </el-button>
      <el-button type="primary" size="small" style="margin-left: 320px">下一页<i
        class="el-icon-arrow-right el-icon--right"></i></el-button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Tag"
    }
</script>

<style scoped>
  .box {
    height: 900px;
    width: 900px;
    border-style: solid;
    border-width: 2px;
    border-radius: 2px;
    border-color: #bfbfbf;
    margin-top: 40px;
    margin-left: 300px;
    margin-right: 0;
    background-color: white;
  }
</style>
