"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.save = exports.getBDData = exports.dbUrl = void 0;
// 模块
// 暴露变量
exports.dbUrl = "";
// 暴露方法
function getBDData() {
    console.log("获取数据库的数据");
    return [
        {
            title: ""
        },
        {
            title: ""
        },
        {
            title: ""
        }
    ];
}
exports.getBDData = getBDData;
function save() {
    console.log("this is save function");
}
exports.save = save;
// export {dbUrl, getBDData, save} // 这样写也可以  不过变量 方法前就不用加export了
// export default getBDData  // export default一个moduel只能用一次
