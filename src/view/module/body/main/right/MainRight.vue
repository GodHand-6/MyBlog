<template>
  <div>
    <el-col>
      <el-row :span="5">
        <Class></Class>
      </el-row>
      <el-row :span="5">
        <Tag></Tag>
      </el-row>
      <el-row :span="14">
        <Recommand></Recommand>
      </el-row>
    </el-col>
  </div>
</template>

<script>

    import Class from "./components/Class";
    import Tag from "./components/Tag";
    import Recommand from "./components/Recommand";

    export default {
        name: "MainRight",
        components:{
            Class,Tag,Recommand
        }
    }
</script>

<style scoped>


  .box {
    width: 300px;
    height: 220px;
    border-style: solid;
    border-width: 2px;
    border-radius: 2px;
    border-color: #bfbfbf;
    margin-top: 60px;
    margin-left: 0;
    margin-bottom: 0;
    padding: 0;
  }


</style>
