// 泛型
// 只能返回string类型的数据
function getData(value:string):string {
  return value
}

// 同时返回string类型 和 number类型
function getDataV2(value:any):any {
  return value
}

// 但any放弃了类型检查 无法实现传入什么 返回什么

// 泛型：可以支持不特定的数据类型 要求：传入的参数和返回的参数一致
function getDataV3<T>(value:T):T {
  return value
}

// getDataV3<number>("das") // 错误写法
getDataV3<number>(123)

// 也可以这样写
function getDataV4<T>(value:T):any {
  return "return value"
}


// 泛型类  有个最小堆算法  需要同时支持返回数字和字符串两种类型 通过泛型来实现
class MinClass {
  public list:number[] = []
  
  add(num:number):void {
    this.list.push(num)
  }
  min():number {
    var minNum = this.list[0]
    for (var i = 0;i < this.list.length; i++) {
      if (minNum > this.list[i]) {
        minNum = this.list[i]
      }
    }
    return minNum
  }
}

var m = new MinClass()
m.add(3)
m.add(22)
m.add(23)
m.add(2)

console.log(m.min())


class MinClassV2<T> {
  public list:T[] = []
  
  add(num:T):void {
    this.list.push(num)
  }
  min():T {
    var minNum = this.list[0]
    for (var i = 0;i < this.list.length; i++) {
      if (minNum > this.list[i]) {
        minNum = this.list[i]
      }
    }
    return minNum
  }
}

var m1 = new MinClassV2<number>()
m1.add(3)
m1.add(22)
m1.add(23)
m1.add(2)

console.log(m1.min())


var m2 = new MinClassV2<string>()
m2.add("3")
m2.add("22")
m2.add("23")
m2.add("1")

console.log(m2.min())


// 泛型接口
interface ConfigFn {
  (name:string, value:string):string
}

var setData:ConfigFn = function(name:string, value:string):string {
  return name + value
}

setData("zhangsan", "is eating")

// 方式1
interface ConfigFnV2 {
  <T>(name:T):T
}

var setDataV2:ConfigFnV2 = function<T>(name:T):T {
  return name
}
setDataV2<string>("lisi")


// 方式2
interface ConfigFnV3<T> {
  (name:T):T
}

function setDataV3<T> (value:T):T {
  return value
}

var myGetData:ConfigFnV3<string> =  setDataV3
myGetData("20") 
// myGetData(20) 错误写法

// 把类当作参数的泛型类
class User {
  username:string | undefined
  password:string | undefined
}

class ArticleCate {
  title:string | undefined
  desc:string | undefined
  status:boolean | undefined
  constructor(params: {
    title:string | undefined,
    desc:string | undefined,
    status:boolean | undefined
  }) {
    this.title = params.title
    this.desc = params.desc
    this.status = params.status
  }
}

class MySQLdb {

  add(user:User):boolean {
    console.log(user.username)
    console.log(user.password)
    return true
  }
  // 重复封装了
  addV2(articleCate:ArticleCate):boolean {
    console.log(articleCate.title)
    console.log(articleCate.desc)
    console.log(articleCate.status)
    return true
  }
}

var u = new User()
u.username = "zhangsan"
u.password = "123456"

var db = new MySQLdb()
db.add(u)

class MySQLdbT<T> {

  add(info:T):boolean {
    console.log(info)
    return true
  }
}

var u2 = new User()
u2.username = "lisi"
u2.password = "123456"

var db2 = new MySQLdbT<User>()
db2.add(u2)


var a2 = new ArticleCate({
  title:"book name", 
  desc:"desc", 
  status:true
})
var db3 = new MySQLdbT<ArticleCate>()
db3.add(a2)
