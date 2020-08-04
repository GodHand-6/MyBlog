<template>
    <el-input
      placeholder="Search..."
      suffix-icon="el-icon-search"
      v-model="input"
      class="searchBox"
      size="mini"
      @keyup.enter.native="search"
    >
    </el-input>
</template>


<script>
    export default {
        name: "SearchBox",
        data() {
            return {
                input: ''
            }
        },
        methods:{
            search: function () {
                  if(this.input != ''){
                      this.$router.push({name : 'Search' , params:{ data : this.input, start : '0' }});
                  }
            }
        }
    }
</script>
<style>
  .searchBox .el-input__inner {
    background-color: #252424;
    border: 0px;
    margin-top: 8px;
    margin-left: 80px;
  }
</style>
