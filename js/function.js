"use strict";
// 函数声明法
function run1() {
    return "run";
}
// 匿名函数
var run12 = function () {
    return "123";
};
// ts中定义方法传参
function run23(name, age) {
    return name + " --- " + age;
}
var run13 = function (name, age) {
    return name + " --- " + age;
};
run13("asd", 123);
function run34(name) {
    console.log(name);
}
// 方法可选参数 可选参数必须配置到最末位
var run33 = function (name, age) {
    if (age) {
        return name + " --- " + age;
    }
    else {
        return "" + name;
    }
};
// 默认参数 默认参数需要放在可选参数后面至最末位
var run44 = function (age, name) {
    if (name === void 0) { name = "asd"; }
    return name + " --- " + age;
};
console.log(run44());
// 剩余参数
function sum(a, b, c, d) {
    return a + b + c + d;
}
console.log(sum(1, 2, 3, 4));
function sum2() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var num = 0;
    result.forEach(function (i) {
        num += i;
    });
    return num;
}
console.log(sum2(1, 2, 3, 4, 5, 6));
function sum3(a, b) {
    var result = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        result[_i - 2] = arguments[_i];
    }
    var num = a + b;
    result.forEach(function (i) { return num += i; });
    return num;
}
console.log(sum3(10, 10, 1, 2, 3, 4, 5, 6));
function getInfo(str) {
    if (typeof str === 'string') {
        return "name:" + str;
    }
    else {
        return "age:" + str;
    }
}
console.log(getInfo("张三"));
console.log(getInfo(20));
function getInfo2(name, age) {
    if (age) {
        return "name:" + name + "age:" + age;
    }
    else {
        return "age:" + name;
    }
}
console.log(getInfo2("李四"));
console.log(getInfo2("李四", 20));
// 箭头函数
setTimeout(function () {
    console.log("run");
}, 1000);
setTimeout(function () {
    console.log("run2");
}, 1000);
