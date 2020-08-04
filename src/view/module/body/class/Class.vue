<template>
  <div class="box">
    <div style="margin-top: 10px">
      <strong style="color: #006c80;font-size: 20px;">
        &nbsp;&nbsp;
        分类
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <strong style="color: black;font-size: 18px">
          共 {{classCount}} 个
        </strong>
        <hr color="#bfbfbf" size="1px" style="margin-top: 10px;">
      </strong>
      <br>
    </div>
      <div>
        <el-radio-group v-model="curClass" style="margin-left: 40px;">
          <span v-for="(item,index) in classes" style="margin-right: 5px">
             <el-radio-button
               @click.native="getData(index)" plain
               :id="index"
               :key="index"
               :label="index"
             >{{item}}
          </el-radio-button>
          </span>
        </el-radio-group>
        <hr  color="#00B5AD" size="4px" style="margin-top: 30px;">
      </div>
    <div style="height: 675px">
      <div class="doc" v-for="(item,index) in content">
        <router-link :to="{name : 'Doc',params : {type : item.doc_type,id : item.doc_id } }">{{item.doc_name}}</router-link>
        <div style="float: right;margin-right: 20px;">
          <i class="el-icon-date"></i>&nbsp;{{item.doc_date}}
        </div>
        <hr v-if="index != content.length - 1" color="#bfbfbf" size="1px" width="680px" style="margin-left: -20px;">
      </div>
    </div>
    <hr color="#bfbfbf" size="1px" style="margin-top: 10px;">
    <div>
      <el-button type="primary" icon="el-icon-arrow-left" size="small" style="margin-left: 200px" @click="prePage"
                 :disabled="disabledPre">上一页
      </el-button>
      <el-button type="primary" size="small" style="margin-left: 320px" @click="nextPage" :disabled="disabledNext">下一页<i
        class="el-icon-arrow-right el-icon--right"></i></el-button>
    </div>
  </div>
</template>

<script>

    import axios from "axios";

    export default {
        name: "Class",
        props: ['tp'],
        data() {
            return {
                classCount: 0,
                classes: null,
                classId: null,
                content: "",
                pagecount: 1,
                pagesize: 26,
                disabledPre: false,
                disabledNext: false,
                curClass: "",
                count: 0,
                model: "Study"
            }
        },
        beforeRouteEnter: (to, from, next) => {
            next(vm => {
                axios.get("http://localhost:8081/class").then(response => {
                    vm.classId = new Array();
                    vm.classes = response.data;
                    let index = 0;
                    for (let name in response.data) {
                        vm.classId[index] = name;
                        index++;
                    }
                    vm.classCount = index;
                    vm.curClass = vm.tp;
                }).then(function () {
                    //做一下校验如果tp不是正确的分类路径我们就不去访问后台
                    for (var temp in vm.classId) {
                        if (vm.tp === vm.classId[temp]) {
                            vm.getData(vm.tp);
                            break;
                        }
                    }
                });
            });
        },
        methods: {
            getData: function (message) {
                axios.get("http://localhost:8081/class/" + message + "/" + "0").then(response => {
                    this.curClass = message;
                    this.content = response.data.list;
                    this.count = response.data.counts;
                    if (this.pagecount == 1) {
                        this.disabledPre = true;
                    }
                    if (this.pagecount * this.pagesize >= this.count) {
                        this.disabledNext = true;
                    }
                });
            }
            ,
            nextPage: function () {
                axios.get("http://localhost:8081/class/" + this.curClass + "/" + (this.pagecount * this.pagesize)).then(response => {
                    this.content = response.data.list;
                    this.pagecount++;
                    if (this.pagecount == 1) {
                        this.disabledPre = true;
                    }
                    if (this.pagecount * this.pagesize >= this.count) {
                        this.disabledNext = true;
                    }
                })
            }
            ,
            prePage: function () {
                axios.get("http://localhost:8081/main/" + this.curClass + "/" + ((this.pagecount - 2) * this.pagesize)).then(response => {
                    // console.log(response.data.counts);
                    this.content = response.data.list;
                    this.pagecount--;
                    if (this.pagecount == 1) {
                        this.disabledPre = true;
                    }
                    if (this.pagecount * this.pagesize >= this.count) {
                        this.disabledNext = true;
                    }
                })
            }
        }
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

  .doc {
    margin-left: 50px;
  }
</style>
