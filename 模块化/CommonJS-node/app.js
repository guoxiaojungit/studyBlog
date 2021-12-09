"use strict"
let module1 = require('./module/module1.js')
console.log(module1.x);
module1.addX(22)
console.log((module1.x));
console.log(module1.obj.m);
module1.obj.addM(11)
console.log(module1.obj.m);