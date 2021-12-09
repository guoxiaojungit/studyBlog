let x = 5

module.exports.addX = (value) => {
    console.log(x,'1');
    x = x + value
    console.log(x,'2');
}
module.exports.x = x
module.exports.obj = {
    m:1,
    n:2,
    addM:(value)=>{
        console.log(this.m,'1m');
        this.m = this.m + value
        console.log((this.m,'2m'));
    }
}