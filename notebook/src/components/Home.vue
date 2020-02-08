<template>
  <el-container>
    <el-header>
      <head-nav />
    </el-header>
    <el-container>
      <el-main>
        <tab-line />
      </el-main>
    </el-container>
    <div class="side-tool">
      <ul>
        <li
          data-placement="left"
          data-toggle="tooltip"
          data-container="body"
          data-original-title="回到顶部"
          style
        >
          <a class="function-button">
            <i class="el-icon-arrow-up"></i>
          </a>
        </li>
      </ul>
    </div>
  </el-container>
</template>

<script>
import HeadNav from "../../public/components/Head.vue";
import TabLine from "../../public/components/TabLine.vue";

export default {
  name: "home",
  components: {
    HeadNav,
    TabLine
  },
  props: {
    // msg: String
  }
};
</script>

<style scoped>
.el-header,
.el-footer {
  color: #333;
  text-align: center;
  line-height: 56px;
}

.el-header {
  height: 56px !important;
}

.el-footer {
  height: auto !important;
}

.el-aside {
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-header {
  padding: 0;
}

.el-main {
  background-color: #fff;
}

body {
  font-size: 17px;
}

.side-tool {
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 1040;
}

.side-tool > ul > li:last-child {
  border-bottom: 1px solid #dcdcdc;
}

.side-tool > ul > li {
  border: 1px solid #dcdcdc;
  border-bottom: none;
  background-color: #fff;
  transition: 0.1s ease-in;
}

.side-tool > ul .function-button,
.side-tool > ul .js-submit-button {
  cursor: pointer;
  width: 50px;
  height: 50px;
  text-align: center;
  display: block;
}

.side-tool > ul .function-button i,
.side-tool > ul .js-submit-button i {
  padding-top: 13px;
  font-size: 20px;
  display: block;
}

.side-tool > ul > li:hover {
  background-color: hsla(0, 0%, 71%, 0.1);
  transition: 0.1s ease-in;
}

.el-footer {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 960px;
  margin-left: -480px;
}
</style>
