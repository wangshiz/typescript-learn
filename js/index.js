"use strict";
// boolean
var flag = true;
// number
var num = 123;
// string
var str = "123";
// array
var arrNum = [0, 1, 2];
var arrNums = [11, 22, 33];
var arrStr = ["a", "b", "c"];
var arrStr = ["aa", "bb", "cc"];
var arrBool = [true, false, true];
var arrBools = [true, false, true];
var arrAny = ["ts", 3.16, true];
// tuple
var arr = ["ts", 3.16, true];
// enum
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = -1] = "error";
})(Flag || (Flag = {}));
var f = Flag.success;
console.log(f);
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["orange"] = 2] = "orange";
})(Color || (Color = {}));
var c = Color.orange;
console.log(c);
var Color2;
(function (Color2) {
    Color2[Color2["red"] = 0] = "red";
    Color2[Color2["blue"] = 5] = "blue";
    Color2[Color2["orange"] = 6] = "orange";
})(Color2 || (Color2 = {}));
var d = Color2.orange;
console.log(d);
// any
var nums = 123;
nums = "str";
nums = true;
var oBox = document.getElementById("box");
oBox.style.color = "red";
// null and undefined
var un;
console.log(un);
var un2;
un2 = 123;
console.log(un2);
var un3;
un3 = null;
console.log(un3);
// void
function run() {
    console.log("run");
}
run();
function run2() {
    console.log("run2");
    return 123456;
}
console.log(run2());
function run3() {
    console.log("run3");
    return undefined;
}
console.log(run3());
// never类型：是其他类型 （包括null和undefined）的子类型，代表从不会出现的值。
// 这意味着声明never的变量只能被never类型所赋值
var a;
// a = 123 错误写法
// a = null 错误写法
// 正确写法 （这个代表不会出现值）
a = (function () {
    throw new Error("错误");
})();
