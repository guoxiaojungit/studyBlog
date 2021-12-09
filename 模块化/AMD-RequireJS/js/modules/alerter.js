define([
    'dataService',
], function(dataService) {
    'use strict';
    let name = 'tom'
    function showMsg(){
        alert(dataService.getMsg()+name)
    }
    return {showMsg}
});