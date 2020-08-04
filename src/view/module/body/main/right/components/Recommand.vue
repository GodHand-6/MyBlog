<template>
  <div class="rBox">
    <div style="background-color: #bfbfbf;height: 50px;width: 300px;">
      <div style="padding: 15px 0px 15px 30px">
        <i class="el-icon-collection-tag"></i>
        最新推荐
      </div>
    </div>
    <hr color="#19D992" size="4px" style="margin-top: 0">
    <div>
      <div v-for="item in content">
        &nbsp;&nbsp;&nbsp;
        <el-link href="www.baidu.com" :underline="false">{{item.doc_name}}</el-link>
        <hr color="#bfbfbf" size="1px">
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
    export default {
        name: "Recommand",
        data() {
            return {
                content: null
            }
        },
        mounted() {
            axios.get("http://localhost:8081/recommend").then(response => {
                this.content = response.data;
            })
        }
    }
</script>

<style>

  .rBox {
    width: 300px;
    border-style: solid;
    border-width: 1px;
    border-radius: 2px;
    border-color: #bfbfbf;
    border-bottom-width: 0px;
    margin-top: 60px;
    margin-left: 0;
    margin-bottom: 0;
    background-color: white;
    padding: 0;
  }

</style>
