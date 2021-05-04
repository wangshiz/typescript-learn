"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teacherModel = exports.TeacherClass = void 0;
var db_1 = require("../modules/db");
var TeacherClass = /** @class */ (function () {
    function TeacherClass() {
    }
    return TeacherClass;
}());
exports.TeacherClass = TeacherClass;
var teacherModel = new db_1.MongoDB();
exports.teacherModel = teacherModel;
