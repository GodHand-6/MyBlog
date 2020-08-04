<template>
  <div class="curbox">
    <el-row>
      <div style="margin-top: 10px">
        <strong style="color: #006c80;font-size: 20px;">
          &nbsp;&nbsp;搜索 {{data}} 的结果
          <strong style="color: black;font-size: 18px;float: right;margin-right: 5px">
            共 {{count}} 个
          </strong>
          <hr color="#19D992" size="4px" style="margin-top: 10px;">
        </strong>
        <br>
      </div>
    </el-row>
    <el-row>
      <div id="content" style="height: 760px">
        <div class="doc" v-for="(item,index) in content">
          <router-link :to="{name : 'Doc',params : {type : item.doc_type,id : item.doc_id } }" v-html="item.doc_name">
          </router-link>
          <div style="float: right;margin-right: 10px;">
            <i class="el-icon-date"></i>&nbsp;{{item.doc_date}}
          </div>
          <hr v-if="index != content.length - 1" color="#bfbfbf" size="1px" width="680px" style="margin-left: -20px;">
        </div>
      </div>
    </el-row>
    <hr color="#bfbfbf" size="1px">
    <el-row>
      <el-button type="primary" icon="el-icon-arrow-left" size="small" style="margin-left: 180px" @click="prePage"
                 :disabled="disabledPre">上一页
      </el-button>
      <el-button type="primary" size="small" style="margin-left: 360px" @click="nextPage" :disabled="disabledNext">下一页<i
        class="el-icon-arrow-right el-icon--right"></i></el-button>
    </el-row>
  </div>

</template>

<script>

    import axios from "axios";

    export default {
        name: "SearchPage",
        props: ['data', 'start'],
        components: {
            axios
        },
        data() {
            return {
                content: "",
                count: null,
                pagecount: 1,
                pagesize: 26,
                disabledPre: false,
                disabledNext: false
            }
        },
        beforeRouteEnter: (to, from, next) => {
            next(vm => {
                axios.get('http://localhost:8081/search/' + vm.data + '/' + vm.start).then(response => {
                    vm.content = response.data.list;
                    vm.count = response.data.counts;
                    if (vm.pagecount == 1) {
                        vm.disabledPre = true;
                    }
                    if (vm.pagecount * vm.pagesize >= vm.count) {
                        vm.disabledNext = true;
                    }
                })
            });
        },
        methods: {
            nextPage: function () {
                axios.get("http://localhost:8081/search/" + this.data + "/" + (this.pagecount * this.pagesize)).then(response => {
                    this.content = response.data.list;
                    this.pagecount++;
                    if (this.pagecount == 1) {
                        this.disabledPre = true;
                    }
                    if (this.pagecount * this.pagesize >= this.count) {
                        this.disabledNext = true;
                    }
                })
            },
            prePage: function () {
                axios.get("http://localhost:8081/search/" + this.data + "/" + ((this.pagecount - 2) * this.pagesize)).then(response => {
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
        },
        watch: {
            '$route'(to, from) {
                axios.get('http://localhost:8081/search/' + this.data + '/' + this.start).then(response => {
                    this.content = response.data.list;
                    this.count = response.data.counts;
                    this.pagecount++;
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
  .curbox {
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
