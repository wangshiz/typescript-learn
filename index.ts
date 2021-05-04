// boolean
var flag:boolean = true

// number
var num:number = 123

// string
var str:string = "123"

// array
var arrNum:number[] = [0, 1, 2]
var arrNums:Array<number> = [11, 22, 33]

var arrStr:string[] = ["a", "b", "c"]
var arrStr:Array<string> = ["aa", "bb", "cc"]

var arrBool:boolean[] = [true, false, true]
var arrBools:Array<boolean> = [true, false, true]

var arrAny:any[] = ["ts", 3.16, true]

// tuple
let arr:[string, number, boolean] = ["ts", 3.16, true]

// enum
enum Flag {success = 1, error = -1}
var f:Flag = Flag.success
console.log(f)

enum Color {red, blue, orange}
var c:Color = Color.orange
console.log(c)

enum Color2 {red, blue = 5, orange}
var d:Color2 = Color2.orange
console.log(d)

// any
var nums:any = 123
nums = "str"
nums = true

var oBox:any = document.getElementById("box")
oBox.style.color = "red"

// null and undefined
var un:undefined
console.log(un)

var un2:number | undefined
un2 = 123
console.log(un2)

var un3:number | string | null
un3 = null
console.log(un3)

// void

function run():void {
  console.log("run")
}

run()

function run2():number {
  console.log("run2")
  return 123456
}

console.log(run2())

function run3():undefined {
  console.log("run3")
  return undefined
}

console.log(run3())

// never类型：是其他类型 （包括null和undefined）的子类型，代表从不会出现的值。
// 这意味着声明never的变量只能被never类型所赋值

var a:never
// a = 123 错误写法
// a = null 错误写法

// 正确写法 （这个代表不会出现值）
a = (()=>{
  throw new Error("错误")
})()
