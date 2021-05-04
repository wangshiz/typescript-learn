// 函数声明法
function run1():string {
  return "run"
}

// 匿名函数
var run12 = function():string {
  return "123"
}

// ts中定义方法传参
function run23 (name:string, age:number) {
  return `${name} --- ${age}`
}

var run13 = function(name:string, age:number):string {
  return `${name} --- ${age}`
}

run13("asd", 123)

function run34 (name:string):void {
  console.log(name)
}

// 方法可选参数 可选参数必须配置到最末位
var run33 = function(name:string, age?:number):string {
  if(age) {
    return `${name} --- ${age}`
  } else {
    return `${name}`
  }
}

// 默认参数 默认参数需要放在可选参数后面至最末位
var run44 = function(age?:number,name:string="asd"):string {
  return `${name} --- ${age}`
}

console.log(run44())

// 剩余参数
function sum(a:number, b:number, c:number, d:number):number {
  return a+b+c+d
}

console.log(sum(1,2,3,4))


function sum2(...result:number[]):number {
  var num = 0
  result.forEach(function(i){
    num += i
  })
  return num
}

console.log(sum2(1,2,3,4,5,6))


function sum3(a:number, b:number, ...result:number[]):number {
  var num = a + b
  result.forEach(i => num += i)
  return num
}

console.log(sum3(10,10,1,2,3,4,5,6))

// 函数重载
function getInfo(name:string):string;
function getInfo(age:number):number;
function getInfo(str:any):any {
  if (typeof str === 'string') {
      return "name:" + str
  } else {
      return "age:"+str
  }
}
console.log(getInfo("张三"))
console.log(getInfo(20))
// console.log(getInfo(true)) 错误写法 会报错

function getInfo2(name:string):string;
function getInfo2(name:string,age:number):number;
function getInfo2(name:any,age?:any):any {
  if (age) {
      return "name:" + name + "age:" + age
  } else {
      return "age:"+name
  }
}
console.log(getInfo2("李四"))
console.log(getInfo2("李四", 20))

// 箭头函数

setTimeout(function(){
  console.log("run")
}, 1000)

setTimeout(()=>{
  console.log("run2")
}, 1000)
