//定义没有依赖的模块
define(function() {
    'use strict';
    let msg = 'www.baidu.com'
    function getMsg(){
        return msg.toLocaleUpperCase()
    }
    return {getMsg}//暴露模块
});