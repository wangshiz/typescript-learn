// 属性接口
// 一般参数约束
function printLabel(name:string):void {
  console.log(name)
}
printLabel("haha")

// 对json的约束
function printLabelV2(labelInfo:{label:string}):void {
  console.log(labelInfo.label)
}
// printLabelV2("haha")  // 错误写法
// printLabelV2({name:"zhangsan"}) // 错误写法
printLabelV2({label:"zhangsan"})

// 对批量方法传入参数进行约束
// 接口：行为和动作的规范，对批量方法进行约束
interface FullName {
  firstName:string
  lastName:string
  age?:number // 可选属性
}

function printName(name:FullName) {
  console.log(name.firstName + "--" + name.lastName)
}

function printInfo(name:FullName) {
  console.log(name.firstName + "--" + name.lastName + "--" + name.age)
}

var obj = {
  age:20,
  firstName: "zhang",
  lastName: "san"
}
printName(obj)
printInfo(obj)

interface Config {
  type:string
  url:string
  data?:string
  dataType:string
}

// 原生封装的ajax
function ajax(config:Config) {
  var xhr = new XMLHttpRequest()
  xhr.open(config.type, config.url, true)
  xhr.send(config.data)
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log("success")
      if (config.dataType == "json") {
        console.log(JSON.parse(xhr.responseText))
      } else {
        console.log(xhr.responseText)
      }
    }
  }
}

ajax({
  type: "get",
  url: "http://a.itying.com/api/productList",
  dataType: "json"
})

// 函数类型接口 对方法传入的参数 以及返回值进行约束  批量约束
// 加密的函数类型接口

interface encrypt {
  (key:string, value:string):string
}

var md5:encrypt = function (key:string, value:string):string {
  // 模拟操作
  return key+value
}

console.log(md5("name", "zhangsan"))


var sha1:encrypt = function (key:string, value:string):string {
  // 模拟操作
  return key+value
}

console.log(sha1("name", "lisi"))


// 可索引接口  数组、对象的约束 （不常用）
// var arr11:number[] = [2342, 12334]
// var arr12:Array<string> = ["123", "123"]
// 对数组的约束
interface UserArr {
  [index:number]:string
}

var arr11:UserArr = ["aaa", "bbb"]
console.log(arr11[0])

// 对对象的约束
interface UserObj {
  [index:string]:string
}

var arr22:UserObj = {name: "20", sex: "man"}
console.log(arr22.name)

// 类类型接口：对类的约束 和抽象类有点相似

interface Animals {
  name:string
  eat(str:string):void
}

class Dog3 implements Animals {
  name:string
  constructor(name:string) {
    this.name = name
  }

  eat():void {
    console.log(this.name + "吃粮食")
  }
}

var d3 = new Dog3("小黑")
d3.eat()


class Cat3 implements Animals {
  name:string
  constructor(name:string) {
    this.name = name
  }

  eat(food:string):void {
    console.log(this.name + "吃" + food)
  }
}

var c3 = new Cat3("小花")
c3.eat("猫粮")

// 接口扩展
interface Animal1 {
  eat():void
}

interface Person1 extends Animal1 {
  work():void
}

interface Person2 extends Animal1 {
  study():void
}

class Programmer {
  public name:string
  constructor(name:string) {
    this.name = name
  }

  coding(code:string) {
    console.log(this.name + code)
  }
}

class Web extends Programmer implements Person1, Person2 {
  constructor(name:string) {
    super(name)
  }

  eat() {
    console.log(this.name + "吃饭")
  }

  work() {
    console.log(this.name + "写代码")
  }

  study() {
    console.log(this.name + "学代码")
  }
}


var w = new Web("xiaoming")
w.work()
w.study()
w.eat()
w.coding("404")