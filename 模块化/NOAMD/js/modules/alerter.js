(function(window,dataService){
    let name = 'tom'
    function showMsg(){
        alert(dataService.getMsg() + ','+name)
    }
    window.alerter = {showMsg}
})(window,dataService)