<template>
  <el-row>
    <el-col :span="14">
      <div class="img">
        <div style="margin: 10px">
          <img src="../../../../../static/sun.jpg" width="720px" height="880">
        </div>
      </div>
    </el-col>

    <el-col :span="10">
      <div class="common">
        <div style="height: 50px">
            <h2>&nbsp;&nbsp;关于本站</h2>
        </div>

        <hr color="#bfbfbf" size="1px">

        <div style="height: 520px;font-family: Microsoft Yahei">
          <p>
            &nbsp;&nbsp;我是在学习了vue之后想到了做一个这样的私人博客，本来构思的挺好觉得这个应该很简单，就模仿了一个大佬的网站试着做一做， 正好熟悉一下刚学习的vue，但是没想到啊，最让我痛苦的前端还是没让我失望，前前后后大约花了五天左右，我觉得三天都是花在了 样式的调整上，自己心高气傲，总想跟大佬写的一样，所以改了又改，改了又改，当我写到一半多的时候我偶然在大佬的博客里看到了 大佬的面试自述，原来大佬面的岗位居然是前端 (>_<) ，当时心态炸裂，我居然想要模仿一个前端程序员的 UI，所以果断放弃了一些效果的制作，进度果然变快了。
          </p>
          <p>
            &nbsp;&nbsp;后端采用springboot + ES + MySQL，因为刚学了 ES ，就想到了用 ES 去做搜索效率远比 MySQL 要高，因为吃过好多次设计的亏，这次我是设计好了全部流程再去动手实践的，但还是因为经验不足，还是反过来对数据库表和ES索引进行了重构，但是我做完了之后才发现我脑子抽了，居然忘了设计标签。。。，所以这算是一个半成品吧，缺少了一个功能，我暂时称它为1.0版本，因为此次本来就是为了练手也没有买服务器，所以没有做后台上传文件，而是通过手动上传文件到数据库和ES中。
          </p>
          <p>
            &nbsp;&nbsp;虽然本次的结果我不是特别满意，也再次体会到了自己经验的不足，好多时候思路有，但是要去实现的时候就不知所措了，往往需要 静下心来思考一下具体的思路，不然会出现改到半路发现行不通，又换另一种方式的情况，但是也是一次很愉快的开发过程，认知到了自己哪里不足， 才能去改正并不断进步。
          </p>
        </div>

        <hr color="#bfbfbf" size="1px">

        <div style="height: 80px">
          <div style="margin-left: 10px">
            <el-tag>神经兮兮</el-tag>
            <el-tag type="success">大三Dog</el-tag>
            <el-tag type="info">B站</el-tag>
            <el-tag type="danger">迷茫</el-tag>
            <el-tag>健忘</el-tag>
            <el-tag type="danger">钟爱音乐的琅琊少年</el-tag>
            <el-tag type="success">小白一枚</el-tag>
            <el-tag type="info">不负韶华，指鹿为马</el-tag>
          </div>
        </div>

        <hr color="#bfbfbf" size="1px">

        <div style="height: 10px">
          <div style="margin-left: 10px">
            <el-tag>C</el-tag>
            <el-tag type="success">C++</el-tag>
            <el-tag type="info">Java</el-tag>
            <el-tag type="warning">servlet</el-tag>
            <el-tag>spring</el-tag>
            <el-tag type="success">spring mvc</el-tag>
            <el-tag type="info">mybatis</el-tag>
            <el-tag type="danger">....</el-tag>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>


</template>

<script>
    export default {
        name: "My"
    }
</script>

<style scoped>
  .img {
    height: 900px;
    width: 750px;
    border-style: solid;
    border-width: 1px;
    border-radius: 2px;
    border-color: #bfbfbf;
    margin-top: 40px;
    margin-left: 200px;
    margin-right: 0;
    background-color: white;
  }

  .common {
    height: 780px;
    width: 500px;
    border-style: solid;
    border-width: 1px;
    border-radius: 2px;
    border-color: #bfbfbf;
    margin-top: 45px;
    margin-left: 80px;
    margin-right: 0;
    background-color: white;
  }
</style>
