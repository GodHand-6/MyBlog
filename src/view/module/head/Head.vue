<template>
  <div style="background-color: #252424">
    <el-row style="padding: 8px">
      <el-col :span="5">
        <img src="../../../../static/logo.png" height="30" width="105" style="margin-top: 7px;margin-left: 200px"/>
      </el-col>
      <el-col :span="10">
        <el-menu
          :default-active="
          (this.$route.path + '').split('/')[1] == 'class' ? '/class/Study' : this.$route.path
          "
          class="el-menu-demo menu-bar"
          mode="horizontal"
          @select="handleSelect"
          background-color="#252424"
          text-color="#fff"
          active-text-color="white"
          router="router"
        >
          <el-menu-item index="/main" style="margin-right: 20px" id="Main">
            <i class="el-icon-s-home"></i>首页
          </el-menu-item>
          <el-menu-item index="/class/Study" style="margin-right: 20px" id="Class">
            <i class="el-icon-s-opportunity"></i>分类
          </el-menu-item>

          <el-menu-item index="/tag" style="margin-right: 20px"  id="Tag">
            <i class="el-icon-price-tag"></i>标签
          </el-menu-item>

            <el-menu-item index="/reduce"  style="margin-right: 20px"  id="Reduce">
              <i class="el-icon-document"></i>归档
            </el-menu-item>

          <el-menu-item index="/my"  id="My">
            <i class="el-icon-info" id="5"></i>关于本站
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="5">
        <search-box></search-box>
      </el-col>
      <el-col :span="4"></el-col>
    </el-row>
  </div>
</template>

<script>
    import SearchBox from "./SearchBox";

    export default {
        name: "Head",
        components: {SearchBox},
        data() {
            return {
                active: '/main'
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                // console.log(key, keyPath);
            }
        }
    }
</script>

<style>


  .menu-bar {
    margin: 8px;
    padding: 1px;
  }

  .el-menu.el-menu--horizontal {
    border-bottom: 0;
  }

  .el-menu--horizontal > .el-menu-item {
    height: 32px;
    line-height: 30px;
  }

  .el-menu-item {
    height: 5px;
    padding: 0px 5px;
    font-size: 15px;
  }

  .el-menu-item.is-active {
    border-radius: 8px !important;
    border-bottom-color: #252424 !important;
    background-color: rgb(87, 84, 85) !important;
  }

  a{
    text-decoration: none;
  }

</style>
