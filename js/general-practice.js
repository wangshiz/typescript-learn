"use strict";
/**
 * 功能 定义一个操作数据库的库  支持mysql mssql mongodb
 * 要求1 mysql mssql mongodb 功能一样 都有crud方法
 * 注意 约束统一的规范 以及代码宠用
 *
 * 解决方案 需要约束规范所以要定义接口 需要代码重用所以用到泛型
 *  1.接口：在面向对象的编程中，接口时一种规范的定义  他定义了行为和动作的规范
 *  2.泛型 通俗理解 泛型就是解决 类 接口 方法的复用
 */
var Book = /** @class */ (function () {
    function Book() {
    }
    return Book;
}());
var MongoDB = /** @class */ (function () {
    function MongoDB() {
    }
    MongoDB.prototype.add = function (info) {
        console.log(info);
    };
    MongoDB.prototype.update = function (info, id) {
        console.log(info, id);
    };
    MongoDB.prototype.delete = function (id) {
        console.log(id);
        throw new Error("Method not implemented.");
    };
    MongoDB.prototype.get = function (id) {
        var list = [];
        return list[0];
    };
    MongoDB.prototype.getAll = function () {
        var list = [];
        return list;
    };
    return MongoDB;
}());
var book = new Book();
book.name = "das";
book.cate = "dasd";
book.no = "12";
var dbbook = new MongoDB();
dbbook.add(book);
var MsSQL = /** @class */ (function () {
    function MsSQL() {
    }
    MsSQL.prototype.add = function (info) {
        throw new Error("Method not implemented.");
    };
    MsSQL.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MsSQL.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MsSQL.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    MsSQL.prototype.getAll = function () {
        throw new Error("Method not implemented.");
    };
    return MsSQL;
}());
var MySQL = /** @class */ (function () {
    function MySQL() {
    }
    MySQL.prototype.add = function (info) {
        throw new Error("Method not implemented.");
    };
    MySQL.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MySQL.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MySQL.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    MySQL.prototype.getAll = function () {
        throw new Error("Method not implemented.");
    };
    return MySQL;
}());
