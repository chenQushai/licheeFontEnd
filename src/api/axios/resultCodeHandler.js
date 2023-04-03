import Vue from 'vue';
import store from '../../store'
import {axios} from './index'

export default async function (response) {
    if (response === undefined) {
        Vue.prototype.$message({
            message: "网络错误，请联系管理员",
            type: 'error'
        })
    }
    else if (response.data.errorCode === 408) {//token失效
        Vue.prototype.$message({
            message: "身份失效，重新登录",
            type: 'error'
        });
        window.location.href = '#/login';
    }

}

