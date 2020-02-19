<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="width-limit clearfix">
      <a class="logo" href="/">
        <img src="../../src/assets/images/head/logo.png" alt="Nav logo" />
      </a>
      <div class="nav-container">
        <div class="collapse navbar-collapse clearfix" id="menu">
          <ul class="nav navbar-nav">
            <li class="tab active">
              <a href="/">
                <i class="iconfont icon-compass">&#xe7d7;</i>
                <span v-if="!isLogin" class="menu-text">首页</span>
                <span v-if="isLogin" class="menu-text">发现</span>
              </a>
            </li>
            <li class="search">
              <form target="_blank" action="/search" accept-charset="UTF-8" method="get">
                <input name="utf8" type="hidden" value="✓" />
                <input
                  type="text"
                  name="q"
                  id="q"
                  value
                  autocomplete="off"
                  placeholder="搜索"
                  class="search-input"
                />
                <a class="search-btn" href="javascript:void(null)">
                  <i class="iconfont icon-search">&#xe600;</i>
                </a>
              </form>
            </li>
          </ul>
        </div>
      </div>
      <a class="btn write-btn" target="_blank" href="/writer#/">
        <i class="iconfont icon-write">&#xe605;</i>
        <span class="menu-text">写文章</span>
      </a>
      <div v-if="isLogin" class="user">
        <div data-hover="dropdown">
          <a class="avatar">
            <img src="../../src/assets/images/user/default_avatar.jpg" alt="avatar" />
          </a>
        </div>
        <ul class="dropdown-menu">
          <li>
            <a>
              <i class="iconfont ic-navigation-profile"></i>
              <span>我的主页</span>
            </a>
          </li>
          <li>
            <a href="/bookmarks">
              <i class="iconfont ic-navigation-mark"></i>
              <span>收藏的文章</span>
            </a>
          </li>
          <li>
            <a href="/users/0738d1ff197b/liked_notes">
              <i class="iconfont ic-navigation-like"></i>
              <span>喜欢的文章</span>
            </a>
          </li>
          <li>
            <a href="/settings">
              <i class="iconfont ic-navigation-settings"></i>
              <span>设置</span>
            </a>
          </li>
          <li>
            <a href="/faqs">
              <i class="iconfont ic-navigation-feedback"></i>
              <span>帮助与反馈</span>
            </a>
          </li>
          <li>
            <a href="/sign_out">
              <i class="iconfont ic-navigation-signout"></i>
              <span>退出</span>
            </a>
          </li>
        </ul>
      </div>
      <div v-if="!isLogin" class="visitor">
        <router-link to="/login">
          <a class="btn log-in" id="sign_in">登录</a>
        </router-link>
        <router-link to="/register">
          <a class="btn sign-up" id="sign_up">注册</a>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "head-nav",
  props: {
    isLogin: {
      default: false
    }
  }
};
</script>

<style scoped>
.navbar {
  width: 100%;
  background-color: #fff;
  border-color: #f0f0f0;
  position: relative;
  min-height: 50px;
  margin-bottom: 20px;
  border: 1px solid transparent;
}

.logo {
  float: left;
  height: 56px;
  padding: 0;
}

nav {
  height: 56px;
}

nav .logo img {
  height: 100%;
}

nav .width-limit {
  min-width: 768px;
  max-width: 1440px;
  margin: 0 auto;
}

nav .navbar-nav li {
  margin-right: 10px;
  float: left;
}

.navbar-nav {
  float: left;
  margin: 0;
}

.nav-container {
  padding: 0;
  float: left;
  margin-left: 10%;
}

.navbar-default .navbar-nav > .active > a,
.navbar-default .navbar-nav > .active > a:focus,
.navbar-default .navbar-nav > .active > a:hover {
  color: #ea6f5a;
  background: none;
}

nav .menu-icon {
  display: inherit;
  font-size: 20px;
  margin-right: 5px;
}

nav form {
  position: relative;
}

form {
  margin: 0 0 20px;
}

nav form .search-btn {
  position: absolute;
  top: 19px;
  right: 5px;
  width: 30px;
  height: 30px !important;
  line-height: normal !important;
  padding: 0 !important;
  color: #969696 !important;
  text-align: center;
}

nav form .ic-search {
  margin: 5px -1px 0 0;
  display: block;
}

.ic-search:before {
  content: "\E618";
}

.navbar-fixed-top {
  top: 0;
  border-width: 0 0 1px;
  border-color: #f0f0f0;
}

.navbar-fixed-bottom,
.navbar-fixed-top {
  border-radius: 0;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
}

nav form .search-input {
  padding: 0 40px 0 20px;
  width: 240px;
  height: 38px;
  font-size: 14px;
  border: 1px solid #eee;
  border-radius: 40px;
  background: #eee;
  transition: width 0.5s;
  -moz-transition: width 0.5s;
  -webkit-transition: width 0.5s;
  -o-transition: width 0.5s;
}

nav form .search-input:focus {
  width: 320px;
}

input,
input:focus {
  outline: none;
}

.visitor,
.user,
.write-btn {
  float: right;
}

.visitor {
  display: inline;
}

nav .write-btn {
  width: 100px;
  height: 40px;
  line-height: 40px;
  margin: 8px 12px 0;
  border-radius: 20px;
  font-size: 15px;
  color: #fff;
  background-color: #ea6f5a;
  position: relative;
}

nav .ic-write {
  margin-right: 3px;
  font-size: 19px;
  vertical-align: middle;
}

nav .sign-up,
nav .sign-up:hover {
  transition: 0.1s ease-in;
  -webkit-transition: 0.1s ease-in;
  -moz-transition: 0.1s ease-in;
  -o-transition: 0.1s ease-in;
  -ms-transition: 0.1s ease-in;
}

nav .sign-up {
  float: right;
  width: 80px;
  height: 38px;
  line-height: 38px;
  margin: 9px 5px 0 30px;
  border: 1px solid rgba(236, 97, 73, 0.7);
  border-radius: 20px;
  font-size: 15px;
  color: #ea6f5a;
  background-color: transparent;
}

nav .log-in,
nav .log-in:hover {
  color: #969696;
}

nav .log-in {
  margin: 11px 6px 0 10px;
  font-size: 15px;
}

nav .nav .tab a {
  height: 56px;
  line-height: 26px;
  padding: 15px;
  color: #333;
}

nav .sign-up:hover {
  color: #ec6149;
  border-color: #ec6149;
  background-color: rgba(236, 97, 73, 0.05);
}

nav .write-btn:focus,
nav .write-btn:hover {
  color: #fff;
  background-color: #ec6149;
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.icon-compass {
  font-size: 18px;
  margin-right: 5px;
}

.icon-write {
  margin-right: 5px;
}
</style>
