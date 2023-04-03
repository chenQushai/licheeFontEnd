import Vue from 'vue'

let checkString = (val) => {
    let pattern = new RegExp("[^a-zA-Z0-9\_\u4e00-\u9fa5]", "i");
    return pattern.test(val)
};
let checkAccNo = (val) => {
    let accNO = /^[0-9A-Za-z]{1,}$/;//账号
    return accNO.test(val)
};
let checkMoney = (val) => {
    if (!val) {
        return true
    }
    let money = /^([1-9][\d]{0,9}|0)(\.[\d]{1,2})?$/;
    return money.test(val)
};
let checkPercentage = (val) => {
    if (val === '') {
        return true
    }
    let percentage = /^\d*\.?\d*\%$/;
    return percentage.test(val);
};

let getCurrentMothLastDay = (years, moth) => {
    let nextMothDay = new Date(years, moth, 1);
    let oneDay = 1000 * 60 * 60 * 24;
    let lastDay = new Date(nextMothDay - oneDay);
    let month = lastDay.getMonth() + 1;
    return `${lastDay.getFullYear()}-${moth}-${lastDay.getDate()}`
};
let checkNum = (value) => {
    var reg = /^[0-9]*$/;
    return reg.test(value);
};
let getToday = () => {
    let day = new Date();
    day.setTime(day.getTime());
    let month = null;
    let today = null;
    if (day.getMonth() + 1 < 10) {
        month = '0' + (day.getMonth() + 1)
    }
    else {
        month = day.getMonth() + 1
    }
    if (day.getDate() < 10) {
        today = '0' + day.getDate();
    }
    else {
        today = day.getDate()
    }
    return day.getFullYear() + "-" + month + "-" + today;
};

let getComputerTime = () => {
    let date = new Date();
    let years = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let min = date.getMinutes();
    let seconds = date.getSeconds();
    if (seconds < 10) {
        seconds = `0${seconds}`
    }
    if (hours < 10) {
        hours = `0${hours}`
    }
    return `${years}-${month}-${day} ${hours}:${min}:${seconds}`
};
//验证英文下划线，数字
let checkCode = (str) => {
    var reg = /^[0-9a-zA-Z_]{1,}$/;
    return reg.test(str)
}
//处理表格数据
let handlerTable = (data, tableData) => {
    if (data) { //传了参数才处理
        let key = Object.keys(data);
        if (key.length !== 0) { //说明无需修改值
            key.forEach((item) => {
                tableData.forEach((t) => {
                    t[item] = data[item][t[item]] //将数据值和枚举的值进行对应
                })
            })
        }
    }
    return tableData
};


//文件判断实体
let checkFile = (file) => {
    let result = {
        code: 0,
        message: ''
    };
    let filesEnd = file.name.split('.');
    if (filesEnd[filesEnd.length - 1] !== 'xlsx' && filesEnd[filesEnd.length - 1] !== 'xls') {
        result.code = -1;
        result.message = '请上传xlsx,xls的excel文件';
        return result
    }

    if (file.size > 134217728) {
        result.code = -1;
        result.message = '请上传文件大小小于128MB';
        return result
    }

    return result;
};
//按钮禁用样式
let checkDelBtnStyle = {
    cursor: 'no-drop',
    color: '#c8c9cc'
};

//计算年龄
let getAge = (birth) => {
    if (birth) {
        let birthdays = new Date(birth.replace(/-/g, "/"));
        let d = new Date();
        let age =
            d.getFullYear() -
            birthdays.getFullYear() -
            (d.getMonth() < birthdays.getMonth() ||
            (d.getMonth() == birthdays.getMonth() &&
                d.getDate() < birthdays.getDate())
                ? 1
                : 0);
        return age;
    }
};

//检测图片路径是否正确
let checkImage = (imageURL) => {
    let basePath = window.baseUrl + '/img';
    let delimiter = (imageURL || '').startsWith('/') ? '' : '/';

    return [basePath, imageURL].join(delimiter)
}


export
{
    checkString,
    checkAccNo,
    checkMoney,
    checkPercentage,
    getCurrentMothLastDay,
    checkNum,
    getToday,
    getComputerTime,
    handlerTable,
    checkCode,
    checkFile,
    checkDelBtnStyle,
    getAge,
    checkImage
}
