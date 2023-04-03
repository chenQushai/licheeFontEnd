import {axios} from './axios/index'
//获取任务列表
export const getTaskList = (params) => {
    return axios.getData('/granada/api/v1/cron/list',params)
};
//保存任务
export const saveTaskName = (params) => {
    return axios.postJSON('/granada/api/v1/cron/create',params)
};
//编辑任务
export const editTaskName = (params) => {
    return axios.putJSON(`/granada/api/v1/cron/modify/${params.id}`,params)
};

//编辑状态
export const editTaskStatus = (params) => {
    return axios.putJSON(`/granada/api/v1/cron/modifyStatus/${params.id}`,params)
};

export const delTask = (params) => {
    return axios.deleteJSON(`/granada/api/v1/cron/delete/${params.id}`)
};

//获取ip
export const getIp = () => {
    return axios.getData('/granada/api/v1/dashboard/convertList')
};
