class Person {
  name:string // 属性 前面省去了public
  constructor(n:string) { // 构造函数 实例化类的时候出发的方法
    this.name = n
  }

  run():void {
    console.log(this.name)
  }

  getName():string {
    return this.name
  }

  setName(name:string):void {
    this.name = name
  }
}

var p = new Person("zhangsan")
p.run()
p.setName("lisi")
console.log(p.getName())


// ts中实现继承
class Bird {
  name:string
  can:string
  voice:string
  constructor(name:string, can:string, voice:string) {
    this.name = name
    this.can = can
    this.voice = voice
  }

  shout():void {
    console.log(this.name + "shout" + this.voice)
  }
}

var b = new Bird("bird", "fly", "zeze")
b.shout()

class Penguin extends Bird {
  constructor(name:string, can:string, voice:string) {
    super(name, can, voice)
  }
}

var pen = new Penguin("penguin", "swin", "jiji")
pen.shout()

class Ostrich extends Bird {
  constructor(name:string, can:string, voice:string) {
    super(name, can, voice) // 初始化父类构造方法
  }
  do():void { // 子类方法
    console.log(this.name + "can" + this.can) 
  }
  shout():string { // 子类重写父类方法
    return `${this.name} --shout-- ${this.voice} --son function--`
  }
}

var ost = new Ostrich("ostrich", "run", "gaga")
console.log(ost.shout())
ost.do()


// 类修饰符  public(默认) private protected(保护类型 在当前类里和子类里访问，在类外部没法访问)
class Bird2 {
  public name:string
  private can:string
  protected voice:string
  static printValue:string = "静态属性" // 静态属性
  constructor(name:string, can:string, voice:string) {
    this.name = name
    this.can = can
    this.voice = voice
  }

  shout():void {
    console.log(this.name + "shout" + this.voice)
  }

  static print():void { // 静态方法
    console.log(`${this.printValue}或者${Bird2.printValue}`)
  }
}

var b2 = new Bird2("bird", "fly", "zeze")
Bird2.print()

class Penguin2 extends Bird2 {
  constructor(name:string, can:string, voice:string) {
    super(name, can, voice)
  }
  do():void { // 子类方法
    console.log(this.name + "can" + this.can) 
  }
  shout():string { // 子类重写父类方法
    return `${this.name} --shout-- ${this.voice} --son function--`
  }
}

var pen2 = new Penguin2("penguin", "swin", "jiji")
console.log(pen2.name)
console.log(pen2.can)
console.log(pen2.voice)

// 多态
class Animal {
  name:string
  constructor(name:string) {
    this.name = name
  }
  eat():void {
    console.log("eat")
  }
}

class Dog extends Animal {
  constructor(name:string) {
    super(name)
  }

  eat():string {
    return this.name + "吃肉"
  }
}

class Rabbit extends Animal {
  constructor(name:string) {
    super(name)
  }

  eat():string {
    return this.name + "吃草"
  }
}

var dog = new Dog("dog")
console.log(dog.eat())

var rabbit = new Dog("rabbit")
console.log(rabbit.eat())

// 抽象
abstract class Animal2 {
  name:string
  constructor(name:string) {
    this.name = name
  }
  abstract eat():any;
  run():void {
    console.log("可不实现")
  }
}

// var a = new Animal2() 错误写法

class Dog2 extends Animal2 {
  constructor(name:string) {
    super(name)
  }
  eat() {
    console.log(this.name + "吃粮食")
  }
}

var dog2 = new Dog2("小黑")
dog2.eat()

class Cat2 extends Animal2 {
  constructor(name:string) {
    super(name)
  }
  eat() {
    console.log(this.name + "吃老鼠")
  }
}

var cat2 = new Cat2("小花")
cat2.eat()

// 只读属性
class ReadOnly {
  readonly age:number
  name:string
  constructor(age:number, name:string) {
    this.age = age
    this.name = name
  }
  print():void {
    console.log(`${this.name} + ${this.age}`)
  }
}

var r = new ReadOnly(1, "zhangsan")
r.print()
r.name = "lisi"
r.age = 20  // 测试了下ts文件会报错但转成js后运行不会报错
r.print()