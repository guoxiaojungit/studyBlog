(function(){
    require.config({
        baseUrl:'js',//基本路径 出发点在根目录下
        paths:{
            //映射：模块标识名：路径
            alerter:'./modules/alerter',//此处不能写成alerter.js，会报错
            dataService:'./modules/dataService'
        }
    })
    require(['alerter'],function(alerter){
        alerter.showMsg()
    })
    //通过两者的比较，可以得出AMD模块定义的方法非常清晰，不会污染全局环境，
    //能够清楚地显示依赖关系。AMD模式可以用于浏览器环境，并且允许非同步加载模块，
    //也可以根据需要动态加载模块。
})()