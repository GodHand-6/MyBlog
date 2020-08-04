<template>
  <div class="box">
    <el-row>
      <div style="margin-top: 10px">
        <strong style="color: #006c80;font-size: 20px;">
          &nbsp;&nbsp;
          文章
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <strong style="color: black;font-size: 18px">
            共 {{count}} 篇
          </strong>
          <hr color="#19D992" size="4px" style="margin-top: 10px;">
        </strong>
        <br>
      </div>
    </el-row>
    <el-row>
      <div id="content" style="height: 760px">
        <div class="doc" v-for="(item,index) in content">
            <router-link :to="{name : 'Doc',params : {type : item.doc_type,id : item.doc_id } }">{{item.doc_name}}</router-link>
          <div style="float: right;margin-right: 10px;">
            <i class="el-icon-date"></i>&nbsp;{{item.doc_date}}
          </div>
          <hr v-if="index != content.length - 1" color="#bfbfbf" size="1px"  width="680px" style="margin-left: -20px;">
        </div>
      </div>
    </el-row>
    <hr color="#bfbfbf" size="1px">
    <el-row>
        <el-button type="primary" icon="el-icon-arrow-left" size="small" style="margin-left: 100px" @click="prePage" :disabled="disabledPre">上一页</el-button>
        <el-button type="primary" size="small"  style="margin-left: 360px" @click="nextPage" :disabled="disabledNext">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </el-row>
  </div>

</template>

<script>

    import axios from "axios";

    export default {
        name: "MainLeft",
        components:{
            axios
        },
        data() {
            return{
                count: 0,
                content: "",
                pagecount: 1,
                pagesize: 26,
                disabledPre: false,
                disabledNext: false
            }
        },
        mounted() {
            axios.get("http://localhost:8081/main/0").then(response => {
                // console.log(response.data.counts);
                this.content = response.data.list;
                this.count = response.data.counts;
                if(this.pagecount == 1){
                    this.disabledPre = true;
                }
                if(this.pagecount * this.pagesize >= this.count){
                    this.disabledNext = true;
                }
            })
        },
        methods:{
            nextPage: function () {
                axios.get("http://localhost:8081/main/" + (this.pagecount * this.pagesize)).then(response => {
                    // console.log(response.data.counts);
                    this.content = response.data.list;
                    this.count = response.data.counts;
                    this.pagecount++;
                    if(this.pagecount == 1){
                        this.disabledPre = true;
                    }
                    if(this.pagecount * this.pagesize >= this.count){
                        this.disabledNext = true;
                    }
                })
            },
            prePage: function () {
                axios.get("http://localhost:8081/main/" + ((this.pagecount - 2) * this.pagesize)).then(response => {
                    // console.log(response.data.counts);
                    this.content = response.data.list;
                    this.count = response.data.counts;
                    this.pagecount--;
                    if(this.pagecount == 1){
                        this.disabledPre = true;
                    }
                    if(this.pagecount * this.pagesize >= this.count){
                        this.disabledNext = true;
                    }
                })
            }
        }
    };


</script>

<style>
  .box {
    height: 900px;
    width: 750px;
    border-style: solid;
    border-width: 2px;
    border-radius: 2px;
    border-color: #bfbfbf;
    margin-top: 40px;
    margin-left: 200px;
    margin-right: 0;
    background-color: white;
  }
  .doc{
    margin-left: 50px;
  }
</style>
