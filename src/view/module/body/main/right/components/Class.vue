<template>
  <div class="box">
    <div style="background-color: #bfbfbf;height: 50px;width: 300px;">
      <div style="padding: 15px 0px 15px 30px">
        <i class="el-icon-s-opportunity"></i>
        分类 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;
        &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; <router-link :to="{name: 'Class', params: {tp :'Study'} }"  class="href">more >></router-link>
      </div>
      <div class="classbox">
        <div class="classItem" v-for="(item,index) in classes">
          <router-link :to="{name: 'Class' , params : {tp : index} }" style="width: 255px">{{item}}</router-link>
        </div>
      </div>
    </div>
    <hr color="#19D992" size="4px" style="margin-top: 0">
  </div>
</template>

<script>

    import axios from "axios";

    export default {
        name: "Class",
        components:{
            axios
        },
        data() {
            return {
                classes: null
            }
        },
        mounted() {
            axios.get("http://localhost:8081/class").then(response => {
                // console.log(response.data)
                this.classes = response.data;
            })
        }
    }
</script>

<style>
  .classbox {
    margin: 20px;
  }

  .classItem{
    border-style: solid;
    border-radius: 2px;
    border-width: 1px;
    border-color: #bfbfbf;
    text-align: center;
    font-size: 18px;
    height: 31px;
    width: 255px;
  }

  .classItem:hover{
    background-color: #ececec;
  }
  .herf:link { color: mediumblue; text-decoration: none; }/* 未访问的链接 */
  .href:visited { color: mediumblue; text-decoration: none; } /* 已访问的链接 */
  .href:hover { color: mediumblue; text-decoration: none; }/* 鼠标移动到链接上 */
  .href:active { color: mediumblue; } /* 选定的链接 */

</style>
