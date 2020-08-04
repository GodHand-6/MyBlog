<template>
  <div>
    <el-row>
      <el-col :span="16">
          <Main-Left></Main-Left>
      </el-col>
      <el-col :span="8">
        <MainRight></MainRight>
      </el-col>
    </el-row>
  </div>
</template>

<script>

    import MainRight from "./right/MainRight";
    import MainLeft from "./left/MainLeft";
    export default {
        name: "Main",
        components:{
            MainLeft,MainRight
        }
    }

</script>

<style scoped>

</style>
