<template>
  <div class="hidden">
    <div style="margin-top: 10px;border-style: solid;border-width: 1px;border-color: #bfbfbf;background-color: white">
      <br>
      <strong style="color: #006c80;font-size: 20px;">
        &nbsp;&nbsp;
        归档
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <strong style="color: black;font-size: 18px">
          <span v-if="content != null">
             共 {{content[0].counts}} 篇
          </span>
        </strong>
      </strong>
      <br><br>
    </div>
    <div v-for="item in content">
      <div style="margin-top: 10px;text-align: center">
        <strong style="color: black;font-size: 18px">
          {{item.year}} 年
        </strong>
      </div>
      <div style="border-style: solid;border-width: 1px;border-color: #bfbfbf;background-color: white;padding: 10px">
        <div style="margin-left: 10px"  v-for="(dc,index) in item.list">
          <router-link :to="{name : 'Doc',params : {type : dc.doc_type,id : dc.doc_id } }" :key="dc.doc_name">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{dc.doc_name}}</router-link>
          <div style="float: right;margin-right: 10px;">
            <i class="el-icon-date"></i>&nbsp;{{dc.doc_date.split("-")[1] + "-" + dc.doc_date.split("-")[2] }}
          </div>
          <hr v-if="index != item.list.length - 1" color="#bfbfbf" size="1px"  width="800px">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "Reduce",
        data() {
          return {
              total: -2,
              content: null
          }
        },
        beforeRouteEnter: (to, from, next) => {
            next(vm =>{
                axios.get("http://localhost:8081/reduce").then(response => {
                    vm.content = response.data;
                })
            });
        }
    }
</script>

<style scoped>
  .hidden {
    height: 900px;
    width: 900px;
    border-width: 0px;
    margin-top: 40px;
    margin-left: 300px;
    margin-right: 0;
  }
</style>
