let data2 = 'module2'

function foo() {  //与另一个模块中的函数冲突了
  console.log(`foo() ${data2}`)
}