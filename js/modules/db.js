"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDB = exports.MsSQL = exports.MySQL = void 0;
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
exports.MongoDB = MongoDB;
var MsSQL = /** @class */ (function () {
    function MsSQL() {
    }
    MsSQL.prototype.add = function (info) {
        console.log(info);
    };
    MsSQL.prototype.update = function (info, id) {
        console.log(info, id);
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
exports.MsSQL = MsSQL;
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
exports.MySQL = MySQL;
