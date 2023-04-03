<template>
    <div class="login-container"
         :style="{backgroundImage:`url(${loginBg})`,backgroundRepeat:'noRepeat',backgroundSize:'100% 100%'}">
        <div class="login-box">
            <div class="right-login">
                <p class="login">系统名</p>
                <div class="login-input">
                    <el-form :model="loginForm" ref="loginForm"
                             :rules="rules"
                             element-loading-text="登录中"
                             v-loading="loginLoading">
                        <el-form-item prop="account" style="margin-right: 0">
                            <el-input
                                placeholder="账号"
                                v-model="loginForm.account"
                                maxlength="30"
                                prefix-icon="el-icon-user-solid">
                            </el-input>
                        </el-form-item>

                        <el-form-item prop="password" style="margin-right: 0">
                            <el-input
                                type="password"
                                v-model="loginForm.password"
                                maxlength="30"
                                placeholder="密码">
                                <i slot="prefix" style="line-height:40px;margin-left: 7px;font-size: 12px!important;"
                                   class="iconfont iconmima1"></i>
                            </el-input>
                        </el-form-item>
                    </el-form>
                    <div class="margin-top50 login-btn">
                        <el-button type="primary" class="btn" @click="login('loginForm')">登录</el-button>
                        <el-button plain class="resetBtn" @click="reset">重置</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {checkString} from '../assets/js/methods'
    import {login} from "../api/login/login";
    import {axios} from '../api/axios/index'

    export default {
        name: "login",
        data() {
            let check = (rule, value, callback) => {
                if (checkString(value)) {
                    callback('含有非法字符串')
                }
                else {
                    callback()
                }
            };
            return {
                code: "",
                encode: '',
                loginBg: require('../assets/img/login-bg2.png'),
                loginLoading: false,
                loginForm: {
                    account: '',
                    password: ''
                },
                rules: {
                    account: [
                        {required: true, message: '请输入账号', trigger: 'change'},
                        {type: 'string', validator: check, trigger: 'change'},
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'change'}
                    ]
                }
            }
        },

        mounted() {
            document.documentElement.addEventListener('keyup', (e) => {
                if (e.keyCode === 13) {
                    this.login('loginForm')
                }
            });
        },

        methods: {
            login(formName) {
                if (this.loginLoading) {
                    this.$message({
                        message: '正在登录，请稍后!!',
                        type: 'warning'
                    });
                    return
                }
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.loginLoading = true;
                        let params = {
                            loginName: this.loginForm.account,
                            pwd: this.loginName.password,
                        };
                        login(params)
                            .then((result) => {
                                this.loginLoading = false;
                                if (result.data.code === 0) {
                                    console.log('登录返回', result)
                                    this.$message({
                                        message: '登录成功',
                                        type: 'success'
                                    });
                                    this.$router.push('/home');
                                }
                                else {
                                    this.$message({
                                        showClose: true,
                                        message: result.data.message,
                                        type: 'error'
                                    });
                                }
                            });


                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            reset() {
                if (this.loginLoading) {
                    this.$message({
                        message: '正在登录，请稍后!!',
                        type: 'warning'
                    });
                    return
                }
                this.loginForm = {
                    account: '',
                    password: '',
                }
            },
        }
    }
</script>

<style lang="scss" scoped>

    .login-container {
        display: flex;
        height: 100vh;
        padding: 1px;
        background-repeat: no-repeat;
        .login-box {
            position: relative;
            height: 353px;
            padding: 20px;
            margin: auto;
            border-radius: 20px;
            background-color: rgb(255, 255, 255);
            box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
            .right-login {
                width: 360px;
                height: 100%;
                .login {
                    margin-top: 30px;
                    font-size: 30px;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: rgba(64, 158, 255, 1);
                    letter-spacing: 5px;
                    text-align: center;
                }
                .login-input {
                    margin-top: 40px;
                    width: 360px;
                }
                .operation-box {
                    margin-top: 20px;
                }

                .login-btn {
                    text-align: center;
                    .btn {
                        width: 172px;
                    }
                    .resetBtn {
                        width: 172px;
                        color: #409EFF;
                    }
                }
            }
        }
    }

    /deep/ .el-form-item__content {
        margin-left: 0 !important;
    }
</style>
