(function(window){
    let msg = 'www.baidu.com'
    function getMsg(){
        return msg.toLocaleUpperCase()
    }
    window.dataService = {getMsg}
})(window)