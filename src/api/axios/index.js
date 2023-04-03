import {axios} from 'castle-haozijunqaq-utils'
import resultCodeHandler from './resultCodeHandler'

axios.setBaseUrl(window.baseUrl);
axios.setResultCodeHandler(resultCodeHandler);
axios.changeIsWithCredentials(false);
// 添加请求拦截器
axios.interceptors.request.use((config) => {
    if (window.sessionStorage.getItem('token')) {
        config.headers["token"] = window.sessionStorage.getItem('token');
    }
    else { //没有token移除
        config.headers["token"] = '';
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

export {axios}