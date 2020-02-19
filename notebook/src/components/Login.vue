<template>
  <div class="sign">
    <div class="logo">
      <a href="/">
        <img src="../assets/images/head/logo.png" alt="Logo" />
      </a>
    </div>
    <div class="main">
      <h4 class="title">
        <div class="normal-title">
          <router-link to="/login">
            <a class="active">登录</a>
          </router-link>
          <b>·</b>
          <router-link to="/register">
            <a id="js-sign-up-btn">注册</a>
          </router-link>
        </div>
      </h4>
      <div class="js-sign-in-container">
        <form id="new_session" action="/sessions" accept-charset="UTF-8" method="post">
          <input name="utf8" type="hidden" value="✓" />
          <input
            type="hidden"
            name="authenticity_token"
            value="Z6ckb/jgaW3Ehlk+miHEwnezhFutZRE8hsXzeqs+JTn2cDNqpfoRX72rVN6W4PziLyhK7q13o8wCHXBpUN+yHw=="
          />
          <div class="input-prepend restyle js-normal">
            <input
              placeholder="手机号或邮箱"
              type="text"
              name="session[email_or_mobile_number]"
              id="session_email_or_mobile_number"
            />
            <i class="iconfont ic-user">&#xe642;</i>
          </div>
          <div class="input-prepend">
            <input placeholder="密码" type="password" name="session[password]" id="session_password" />
            <i class="iconfont ic-password">&#xe61d;</i>
          </div>
          <input value="false" type="hidden" name="session[oversea]" id="session_oversea" />
          <div class="remember-btn">
            <input
              type="checkbox"
              value="true"
              name="session[remember_me]"
              id="session_remember_me"
            />
            <span>记住我</span>
          </div>
          <div class="forget-btn">
            <a class @click="showHideProblem()">登录遇到问题?</a>
            <ul class="dropdown-menu" v-if="isShowProblem" ref="problemBox">
              <li>
                <a href="/users/password/email_reset">用邮箱重置密码</a>
              </li>
            </ul>
          </div>
          <button class="sign-in-button" id="sign-in-form-submit-btn" type="button">
            <span id="sign-in-loading"></span>
            登录
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      isShowProblem: false
    };
  },
  methods: {
    showHideProblem() {
      this.isShowProblem = !this.isShowProblem;
    },
    closeBox(e) {
      const problemBox = this.$refs.problemBox;
      if (e.target.contains(problemBox)) {
        this.isShowProblem = false;
      }
    }
  },
  // 创建click监听
  mounted() {
    this.$nextTick(function() {
      document.addEventListener("click", e => {
        this.closeBox(e);
      });
    });
  },
  // 清除click监听
  beforeDestroy() {
    document.removeEventListener("click", e => {
      this.closeBox(e);
    });
  }
};
</script>

<style scoped>
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.sign {
  height: 100%;
  min-height: 750px;
  text-align: center;
  font-size: 14px;
  background-color: #f1f1f1;
}
.sign:before {
  content: "";
  display: inline-block;
  height: 85%;
  vertical-align: middle;
}
.sign .logo {
  position: absolute;
  top: 28px;
  margin-left: 9px;
}
.sign .logo img {
  width: 182px;
}
.sign .main {
  width: 400px;
  margin: 150px auto 0;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  vertical-align: middle;
  display: inline-block;
}
.sign .reset-title,
.sign .title {
  margin: 0 auto 50px;
  padding: 10px;
  font-weight: 400;
  color: #969696;
}

.sign .reset-title .active,
.sign .title .active {
  font-weight: 700;
  color: #ea6f5a;
  border-bottom: 2px solid #ea6f5a;
}
.sign .reset-title a,
.sign .title a {
  padding: 10px;
  color: #969696;
}
.sign .reset-title b,
.sign .title b {
  padding: 10px;
}

.sign .reset-title a,
.sign .title a {
  padding: 10px;
  color: #969696;
}
.sign form {
  margin-bottom: 30px;
}
form {
  margin: 0 0 20px;
}
.sign form .restyle {
  margin-bottom: 0;
}
.sign form .input-prepend {
  position: relative;
  width: 100%;
}
.sign form .input-prepend input {
  width: 100%;
  height: 50px;
  margin-bottom: 0;
  padding: 4px 12px 4px 35px;
  border: 1px solid #c8c8c8;
  border-radius: 0 0 4px 4px;
  background-color: hsla(0, 0%, 71%, 0.1);
  vertical-align: middle;
}
.sign form .restyle input {
  border-bottom: none;
  border-radius: 4px 4px 0 0;
}
.sign form .input-prepend i {
  position: absolute;
  top: 14px;
  left: 10px;
  font-size: 18px;
  color: #969696;
}
.sign .remember-btn {
  float: left;
  margin: 15px 0;
}
.sign .remember-btn span {
  margin-left: 5px;
  font-size: 15px;
  color: #969696;
  vertical-align: middle;
}
.sign .forget-btn {
  float: right;
  position: relative;
  margin: 15px 0;
  font-size: 14px;
}
.sign .forget-btn a {
  color: #999;
  cursor: pointer;
}
.sign .forget-btn .dropdown-menu {
  top: 20px;
  left: auto;
  right: 0;
  border-radius: 4px;
}
.dropdown-menu {
  margin-top: 0;
  border-color: transparent;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
  -webkit-filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  list-style: none;
  font-size: 14px;
  text-align: left;
  background-color: #fff;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  background-clip: padding-box;
}
.sign .forget-btn .dropdown-menu a {
  padding: 10px 20px;
  color: #333;
}
.dropdown-menu > li > a {
  display: block;
  padding: 3px 20px;
  clear: both;
  font-weight: 400;
  line-height: 1.42857;
  color: #333;
  white-space: nowrap;
}
.sign .sign-in-button{
  margin-top: 20px;
  width: 100%;
  padding: 9px 18px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  color: #fff;
  background: #3194d0;
  cursor: pointer;
  outline: none;
  display: block;
  clear: both;
}
.sign #sign-in-loading {
  position: relative;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin-top: -4px;
  margin-right: 2px;
  display: none;
}
li {
  line-height: 20px;
}
</style>
