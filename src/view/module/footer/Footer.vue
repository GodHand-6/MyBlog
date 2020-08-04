<template>
  <div style="height: 220px;background: #252424;color: white;">
    <el-row>
      <el-col :span="2" style="margin-left: 300px;margin-top: 50px;">
        <img src="../../../../static/my.jpg" width="100px" height="100px">

      </el-col>
      <el-col :span="1">
        <div class="spilt"></div>
      </el-col>

      <el-col :span="4" style="margin-top: 20px">
        <h4>友情链接</h4>
        &nbsp; &nbsp;<el-link href="https://blog.csdn.net/yue_xx" target="_blank" :underline="false" class="font-active">CSDN</el-link>
        <br>
        &nbsp; &nbsp;<el-link href="https://github.com/GodHand-6" target="_blank" :underline="false" class="font-active">github</el-link>
      </el-col>

      <el-col :span="1">
        <div class="spilt"></div>
      </el-col>

      <el-col :span="4" style="margin-top: 20px">
        <h4>联系Mole</h4>
        <div class="font-active">
          1975597979@qq.com
        </div>
        <div class="font-active">
          QQ:1975597979
        </div>

      </el-col>

      <el-col :span="1">
        <div class="spilt"></div>
      </el-col>

      <el-col :span="3">
          <h4 style="color: #575757;text-align: center;margin-top: 70px">指鹿为马</h4>
      </el-col>
    </el-row>

    <el-row style="margin-top: 5px">
      <hr color="#575757" size="1px">
      <p style="text-align: center;color:#575757">&copy;岳贤翔</p>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
  .spilt {
    border: solid #575757;
    height: 110px;
    width: 0;
    border-width: thin;
    margin-left: 0;
    margin-top: 40px;
  }
  .font-active{
    font-size: 12px;color: #575757
  }

  .font-active:hover{
    color: white;
  }
</style>
