"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 属性接口
// 一般参数约束
function printLabel(name) {
    console.log(name);
}
printLabel("haha");
// 对json的约束
function printLabelV2(labelInfo) {
    console.log(labelInfo.label);
}
// printLabelV2("haha")  // 错误写法
// printLabelV2({name:"zhangsan"}) // 错误写法
printLabelV2({ label: "zhangsan" });
function printName(name) {
    console.log(name.firstName + "--" + name.lastName);
}
function printInfo(name) {
    console.log(name.firstName + "--" + name.lastName + "--" + name.age);
}
var obj = {
    age: 20,
    firstName: "zhang",
    lastName: "san"
};
printName(obj);
printInfo(obj);
// 原生封装的ajax
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log("success");
            if (config.dataType == "json") {
                console.log(JSON.parse(xhr.responseText));
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
}
ajax({
    type: "get",
    url: "http://a.itying.com/api/productList",
    dataType: "json"
});
var md5 = function (key, value) {
    // 模拟操作
    return key + value;
};
console.log(md5("name", "zhangsan"));
var sha1 = function (key, value) {
    // 模拟操作
    return key + value;
};
console.log(sha1("name", "lisi"));
var arr11 = ["aaa", "bbb"];
console.log(arr11[0]);
var arr22 = { name: "20", sex: "man" };
console.log(arr22.name);
var Dog3 = /** @class */ (function () {
    function Dog3(name) {
        this.name = name;
    }
    Dog3.prototype.eat = function () {
        console.log(this.name + "吃粮食");
    };
    return Dog3;
}());
var d3 = new Dog3("小黑");
d3.eat();
var Cat3 = /** @class */ (function () {
    function Cat3(name) {
        this.name = name;
    }
    Cat3.prototype.eat = function (food) {
        console.log(this.name + "吃" + food);
    };
    return Cat3;
}());
var c3 = new Cat3("小花");
c3.eat("猫粮");
var Programmer = /** @class */ (function () {
    function Programmer(name) {
        this.name = name;
    }
    Programmer.prototype.coding = function (code) {
        console.log(this.name + code);
    };
    return Programmer;
}());
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    Web.prototype.eat = function () {
        console.log(this.name + "吃饭");
    };
    Web.prototype.work = function () {
        console.log(this.name + "写代码");
    };
    Web.prototype.study = function () {
        console.log(this.name + "学代码");
    };
    return Web;
}(Programmer));
var w = new Web("xiaoming");
w.work();
w.study();
w.eat();
w.coding("404");
