/**
 * 装饰器:装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为。
 * 
 * 通俗的讲装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能。
 * 
 * 常见的装饰器有:类装饰器、属性装饰器、方法装饰器、参数装饰器
 * 
 * 装饰器的写法:普通装饰器（无法传参）、装饰器工厂（可传参)
 * 
 * 装饰器是过去几年中js最大的成就之一，已是Es7的标准特性之一
 */
 console.log("类装饰器---start")
// 1、类装饰器:类装饰器在类声明之前被声明〈紧靠着类声明)。类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。传入一个参数
// 类装饰器 （无法传参）
function logClass(params:any) {
  console.log(params)
  // param 就是当前类
  params.prototype.apiUrl = "动态扩展属性"

  params.prototype.run = function():void {
    console.log("这是一个装饰器方法")
  }
}

@logClass
class HttpClient {
  constructor(){}
  getData() {}
}

var http:any = new HttpClient()
console.log(http.apiUrl)
http.run()

// 装饰器工厂(带参数)
function logClassV2(params:string) {
  return function(target:any) {
    console.log(target)
    console.log(params)
    target.prototype.apiUrl = params
  }
}

@logClassV2("http://hello.com")
class HttpClientV2 {
  constructor(){}
  getData() {}
}

var http:any = new HttpClientV2()
console.log(http.apiUrl)

/**
 * 下面是一个重载构造函数的例子。
 * 类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
 * 如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。
 */

function logClassV3(target:any) {
  console.log(target)
  return class extends target {
    apiUrl:any = "我是修改后的数据"
    
    getData() {
      this.apiUrl = this.apiUrl + "----"
      console.log(this.apiUrl)
    }
  }
}

@logClassV3
class HttpClientV3 {
  public apiUrl:string | undefined
  constructor(){
    this.apiUrl = "我是构造函数里面的apiUrl"
  }
  getData() {
    console.log(this.apiUrl)
  }
}

var http:any = new HttpClientV3()
http.getData()
console.log("类装饰器---end")

/**
 * 属性装饰器
 * 属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数:
 *    1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
 *    2、成员的名字。
 */
 console.log("属性装饰器---start")
/**类装饰器 */
function logClassV4(params:string) {
  return function(target:any) {
    // console.log(target)
    // console.log(params)
  }
}

/**属性装饰器 */
function logProperty(params:any) {
  return function(target:any, attr:any) {
    console.log(params)
    console.log(target)
    console.log(attr)
    target[attr] = params
  }
}


@logClassV4("xxxx")
class HttpClientV4 {
  @logProperty("yyyyy")
  public url:any | undefined
  constructor(){}
  getData() {
    console.log(this.url)
  }
}

var http:any = new HttpClientV4()
http.getData()
console.log("属性装饰器---end")

/**
 * 3、方法装饰器
 * 它会被应用到方法的属性描述符上，可以用来监视，修改或者替换方法定义。
 * 方法装饰会在运行时传入下列3个参数:
 *    1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
 *    2、成员的名字。
 *    3、成员的属性描述符。
 */
 console.log("方法装饰器---start")
// 方法装饰器一
function logMethod(params:any) {
  return function(target:any, methodName:any, desc:any) {
    console.log(target)
    console.log(methodName)
    console.log(desc)
    target.apiUrl = "xxx"
    target.run = function() {
      console.log("run")
    }
  }
}

class HttpClientV5 {
  public url:any | undefined
  constructor(){}
  @logMethod("http://logMethod.com")
  getData() {
    console.log(this.url)
  }
}

var http:any = new HttpClientV5()
console.log(http.apiUrl)
http.run()


// 方法装饰器二
function logMethodV2(params:any) {
  return function(target:any, methodName:any, desc:any) {
    console.log(target)
    console.log(methodName)
    console.log(desc.value)

    // 修改装饰器的方法 把装饰器方法里面传入的所有参数改为string类型

    // 1.保存当前的方法
    var oMethod = desc.value
    desc.value = function(...args:any[]) {
      args = args.map((value) => {
        return String(value)
      })

      console.log(args)
      oMethod.apply(this, args)
    }
  }
}

class HttpClientV6 {
  public url:any | undefined
  constructor(){}
  @logMethodV2("http://logMethod.com")
  getData(...args:any[]) {
    console.log(args)
    console.log("我是getData里面的方法")
  }
}

var http:any = new HttpClientV6()
http.getData(123, "aaa")
console.log("方法装饰器---end")

/**
 * 方法参数装饰器
 * 参数装饰器表达式会在运行时当作函数被调用，可以使用参数装饰器为类的原型增加一些元素数据﹐传入下列3个参数:
 *    1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
 *    2、方法的名字。
 *    3、参数在函数参数列表中的索引。
 */
console.log("方法参数装饰器---start")
function logParams(params:any) {
  return function(target:any, methodName:any, paramsIndex:any) {
    console.log(target)
    console.log(methodName)
    console.log(paramsIndex)
    target.apiUrl = params
  }
}

class HttpClientV7 {
  public url:any | undefined
  constructor(){}
  
  getData(@logParams("xxxx") xxxx:any, @logParams("uuid") uuid:any) {
    console.log(uuid)
    console.log(xxxx)
  }
}

var http:any = new HttpClientV7()
http.getData(123, "yyy")
console.log(http.apiUrl)
console.log("方法参数装饰器---end")

console.log("装饰器执行顺序---start")
// 装饰器执行顺序
// 属性 -> 方法 -> 方法参数 -> 类
// 如果有多个同样的装饰器，他会先执行后面的
function logClass1(params:any) {
  return function(target:any) {
    console.log("类装饰器1")
  }
}

function logClass2(params:any) {
  return function(target:any) {
    console.log("类装饰器2")
  }
}

function logAttr(params?:string) {
  return function(target:any, attrName:any) {
    console.log("属性装饰器")
  }
}

function logMethods(params?:string) {
  return function(target:any, attrName:any) {
    console.log("方法装饰器")
  }
}

function logParam1(params?:string) {
  return function(target:any, attrName:any, desc:any) {
    console.log("方法参数装饰器1")
  }
}

function logParam2(params?:string) {
  return function(target:any, attrName:any, desc:any) {
    console.log("方法参数装饰器2")
  }
}

@logClass1("logClass1")
@logClass2("logClass2")
class HttpClientV8 {
  @logAttr()
  public apiUrl:string | undefined

  constructor(){}
  @logMethods()
  getData():boolean {
    return true
  }

  setData(@logParam1() attr1:any, @logParam2() attr2:any) {}
}

var http:any = new HttpClientV8()
console.log(http.apiUrl)

console.log("装饰器执行顺序---end")