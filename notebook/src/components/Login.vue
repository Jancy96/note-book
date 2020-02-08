<template>
  <div class="sign">
    <div class="logo">
      <a href="/">
        <img
          src="../assets/images/head/logo.png"
          alt="Logo"
        />
      </a>
    </div>
    <div class="main">
      <h4 class="title">
        <div class="normal-title">
          <a class="active" href="/sign_in">登录</a>
          <b>·</b>
          <a id="js-sign-up-btn" class href="/sign_up">注册</a>
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
            <i class="iconfont ic-user"></i>
          </div>
          <div class="input-prepend">
            <input placeholder="密码" type="password" name="session[password]" id="session_password" />
            <i class="iconfont ic-password"></i>
          </div>
          <input value="false" type="hidden" name="session[oversea]" id="session_oversea" />
          <div class="remember-btn">
            <input
              type="checkbox"
              value="true"
              checked="checked"
              name="session[remember_me]"
              id="session_remember_me"
            />
            <span>记住我</span>
          </div>
          <div class="forget-btn">
            <a class data-toggle="dropdown" href>登录遇到问题?</a>
            <ul class="dropdown-menu">
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
  props: {
    // msg: String
  }
};
</script>

<style scoped>
@font-face {
  font-family: "iconfont"; /* project id 1625496 */
  src: url("//at.alicdn.com/t/font_1625496_lcjemzlnk4.eot");
  src: url("//at.alicdn.com/t/font_1625496_lcjemzlnk4.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_1625496_lcjemzlnk4.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_1625496_lcjemzlnk4.woff") format("woff"),
    url("//at.alicdn.com/t/font_1625496_lcjemzlnk4.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_1625496_lcjemzlnk4.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
