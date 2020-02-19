<template>
    <div class="sign">
        <div class="logo">
            <a href="/">
                <img src="../assets/images/head/logo.png" alt="Logo" />
            </a>
        </div>
        <div class="main">
            <h4 class="title">
                <router-link to="/login">
                    <a>登录</a>
                </router-link>
                <b>·</b>
                <router-link to="/register">
                    <a id="js-sign-up-btn" class="active">注册</a>
                </router-link>
            </h4>
            <div class="js-sign-up-container">
                <form class="new_user">
                    <div class="input-prepend restyle js-normal">
                        <input
                            placeholder="邮箱"
                            type="text"
                            @input="verifyEmail()"
                            v-model="emailAddress"
                        />
                        <i class="iconfont ic-phonenumber">&#xe665;</i>
                    </div>
                    <div
                        class="input-prepend restyle no-radius"
                        v-if="emailAddress !== ''"
                    >
                        <input
                            type="text"
                            placeholder="邮箱验证码"
                            v-model="smsCode"
                        />
                        <i class="iconfont ic-verify">&#xe61b;</i>
                        <a
                            class="btn-up-resend js-send-code-button"
                            href="javascript:void(0);"
                            :class="{ disable: !emailTrue }"
                            @click="sendCode()"
                            >{{ sendText }}</a
                        >
                    </div>
                    <div class="input-prepend">
                        <input
                            placeholder="设置密码"
                            type="password"
                            v-model="password"
                        />
                        <i class="iconfont ic-password">&#xe61d;</i>
                    </div>
                    <button
                        class="sign-up-button"
                        id="sign_up_btn"
                        type="button"
                        @click="submit()"
                    >
                        注册
                    </button>
                </form>
                <!-- Error Message -->
                <div
                    class="tooltip tooltip-error fade right in"
                    v-if="!checkPass"
                    :style="errorLocation"
                >
                    <div
                        class="tooltip-arrow tooltip-arrow-border"
                        style="top: 50%;"
                    ></div>
                    <div
                        class="tooltip-arrow tooltip-arrow-bg"
                        style="top: 50%;"
                    ></div>
                    <div class="tooltip-inner">
                        <i class="iconfont ic-error">&#xe648;</i>
                        <span>{{ errorMessage }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {fetchPost} from '../https.js'
import axios from 'axios'
export default {
    name: 'register',
    data() {
        return {
            haveSent: false,
            sendText: '发送验证码',
            sendAgainText: '重新发送',
            emailAddress: '',
            smsCode: '',
            password: '',
            emailTrue: false,
            checkPass: true,
            errorMessage: '',
            errorLocation: 'top:5px',
            emailPass: false,
            passwordPass: false,
            codePass: false
        }
    },
    methods: {
        // 验证邮箱
        verifyEmail() {
            this.checkPass = true
            var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
            if (this.emailAddress === '') {
                this.errorMessage = '请输入邮箱'
                this.checkPass = false
                this.errorLocation = 'top:5px'
                return false
            }
            if (!reg.test(this.emailAddress)) {
                this.errorMessage = '邮箱格式不正确'
                this.checkPass = false
                this.errorLocation = 'top:5px'
                return false
            } else {
                this.emailTrue = true
            }
            this.emailPass = true
        },
        // 验证验证码
        verifySmsCode() {
            this.checkPass = true
            if (this.smsCode === '') {
                this.errorMessage = '请输入邮箱验证码'
                this.checkPass = false
                this.errorLocation = 'top:55px'
                return false
            }
            if (
                !this.smsCode.length === 4 ||
                this.smsCode < 1000 ||
                this.smsCode > 9999
            ) {
                this.errorMessage = '邮箱验证码格式错误'
                this.checkPass = false
                this.errorLocation = 'top:55px'
                return false
            }
            this.codePass = true
        },
        // 验证密码
        validatePass() {
            this.checkPass = true
            if (this.password === '') {
                this.errorMessage = '请输入密码'
                this.checkPass = false
                this.errorLocation = 'top:105px'
                return false
            }
            if (this.password.length < 6) {
                this.errorMessage = '密码不能少于6个字符'
                this.checkPass = false
                this.errorLocation = 'top:105px'
                return false
            }
            this.passwordPass = true
        },
        // 发送验证码
        async sendCode() {
            this.emailTrue = false
            var timeClock
            let timer_num = 60
            let that = this

            // send code api
            let params = { email: this.emailAddress }
            let res = await fetchPost('/email-vilidate-code', params)
            console.log(res)                

            timeClock = setInterval(function() {
                timer_num--
                that.sendText = that.sendAgainText + '(' + timer_num + 's)'
                if (timer_num === 0) {
                    clearInterval(timeClock)
                    that.emailTrue = true
                    that.sendText = that.sendAgainText
                }
            }, 1000)
        },
        // 提交注册
        submit() {
            this.verifyEmail()
            if (this.emailPass === true) {
                this.validatePass()
            }
            if (this.passwordPass === true) {
                this.verifySmsCode()
            }
        }
    }
}
</script>

<style scoped>
.iconfont {
    font-family: 'iconfont' !important;
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
    content: '';
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
.sign .sign-up-button {
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #42c02e;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
}
li {
    line-height: 20px;
}
.sign .btn-up-resend {
    position: absolute;
    top: 7px;
    right: 7px;
    width: 100px;
    height: 36px;
    font-size: 13px;
    color: #fff;
    background-color: #42c02e;
    border-radius: 20px;
    line-height: 36px;
    border: 0;
}
.sign .disable,
.sign .disable-gray {
    opacity: 0.5;
    pointer-events: none;
}
.sign form .no-radius input {
    border-radius: 0;
}
.js-send-code-button {
    opacity: 1;
}
.sign .tooltip-error {
    font-size: 14px;
    line-height: 25px;
    white-space: nowrap;
    background: none;
}
.tooltip.right {
    margin-left: 3px;
    padding: 0 5px;
}
.tooltip.in {
    opacity: 0.9;
    filter: alpha(opacity=90);
}
.fade.in {
    opacity: 1;
}
.tooltip {
    position: absolute;
    z-index: 1070;
    display: block;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-style: normal;
    font-weight: 400;
    letter-spacing: normal;
    line-break: auto;
    line-height: 1.42857;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    white-space: normal;
    word-break: normal;
    word-spacing: normal;
    word-wrap: normal;
    font-size: 12px;
    opacity: 0;
    filter: alpha(opacity=0);
    left: 300px;
}
.fade {
    opacity: 0;
    transition: opacity 0.15s linear;
    width: 100%;
}
.sign .tooltip-error.right .tooltip-arrow-border {
    border-right-color: #ea6f5a;
}
.tooltip.right .tooltip-arrow {
    top: 50%;
    left: 0;
    margin-top: -5px;
    border-width: 5px 5px 5px 0;
    border-right-color: #000;
}
.tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
}
.sign .tooltip-error.right .tooltip-arrow-bg {
    left: 2px;
    border-right-color: #fff;
}
.sign .tooltip-error .tooltip-inner {
    color: #333;
    border: 1px solid #ea6f5a;
    background-color: #fff;
}
.tooltip-inner {
    color: #fff;
    text-align: center;
    background-color: #000;
    border-radius: 4px;
    padding: 5px 10px;
}
.sign .tooltip-error .tooltip-inner i {
    position: static;
    margin-right: 5px;
    font-size: 20px;
    color: #ea6f5a;
    vertical-align: middle;
}
.sign .tooltip-error .tooltip-inner span {
    vertical-align: middle;
    display: inline-block;
    white-space: normal;
    max-width: 230px;
}
.js-sign-up-container {
    position: relative;
}
</style>
