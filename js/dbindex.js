"use strict";
// import {getBDData as get, save} from "./modules/model"
// // 替换方法名
// get()
// save()
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("./modules/db");
var book = new Book();
book.name = "das";
book.cate = "dasd";
book.no = "12";
var dbbook = new db_1.MongoDB(); // 这里指向的时db.ts里的MongoDB
dbbook.add(book);
