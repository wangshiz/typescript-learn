"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentModel = exports.StudentClass = void 0;
var db_1 = require("../modules/db");
var StudentClass = /** @class */ (function () {
    function StudentClass() {
    }
    return StudentClass;
}());
exports.StudentClass = StudentClass;
var studentModel = new db_1.MsSQL();
exports.studentModel = studentModel;
