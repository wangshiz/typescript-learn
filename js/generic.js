"use strict";
// 泛型
// 只能返回string类型的数据
function getData(value) {
    return value;
}
// 同时返回string类型 和 number类型
function getDataV2(value) {
    return value;
}
// 但any放弃了类型检查 无法实现传入什么 返回什么
// 泛型：可以支持不特定的数据类型 要求：传入的参数和返回的参数一致
function getDataV3(value) {
    return value;
}
// getDataV3<number>("das") // 错误写法
getDataV3(123);
// 也可以这样写
function getDataV4(value) {
    return "return value";
}
// 泛型类  有个最小堆算法  需要同时支持返回数字和字符串两种类型 通过泛型来实现
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (num) {
        this.list.push(num);
    };
    MinClass.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return MinClass;
}());
var m = new MinClass();
m.add(3);
m.add(22);
m.add(23);
m.add(2);
console.log(m.min());
var MinClassV2 = /** @class */ (function () {
    function MinClassV2() {
        this.list = [];
    }
    MinClassV2.prototype.add = function (num) {
        this.list.push(num);
    };
    MinClassV2.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return MinClassV2;
}());
var m1 = new MinClassV2();
m1.add(3);
m1.add(22);
m1.add(23);
m1.add(2);
console.log(m1.min());
var m2 = new MinClassV2();
m2.add("3");
m2.add("22");
m2.add("23");
m2.add("1");
console.log(m2.min());
var setData = function (name, value) {
    return name + value;
};
setData("zhangsan", "is eating");
var setDataV2 = function (name) {
    return name;
};
setDataV2("lisi");
function setDataV3(value) {
    return value;
}
var myGetData = setDataV3;
myGetData("20");
// myGetData(20) 错误写法
// 把类当作参数的泛型类
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var ArticleCate = /** @class */ (function () {
    function ArticleCate(params) {
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
    return ArticleCate;
}());
var MySQLdb = /** @class */ (function () {
    function MySQLdb() {
    }
    MySQLdb.prototype.add = function (user) {
        console.log(user.username);
        console.log(user.password);
        return true;
    };
    // 重复封装了
    MySQLdb.prototype.addV2 = function (articleCate) {
        console.log(articleCate.title);
        console.log(articleCate.desc);
        console.log(articleCate.status);
        return true;
    };
    return MySQLdb;
}());
var u = new User();
u.username = "zhangsan";
u.password = "123456";
var db = new MySQLdb();
db.add(u);
var MySQLdbT = /** @class */ (function () {
    function MySQLdbT() {
    }
    MySQLdbT.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    return MySQLdbT;
}());
var u2 = new User();
u2.username = "lisi";
u2.password = "123456";
var db2 = new MySQLdbT();
db2.add(u2);
var a2 = new ArticleCate({
    title: "book name",
    desc: "desc",
    status: true
});
var db3 = new MySQLdbT();
db3.add(a2);
