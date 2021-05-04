// import {getBDData as get, save} from "./modules/model"
// // 替换方法名
// get()
// save()

import {MongoDB} from "./modules/db"
var book = new Book()
book.name = "das"
book.cate = "dasd"
book.no = "12"

var dbbook = new MongoDB<Book>()  // 这里指向的时db.ts里的MongoDB
dbbook.add(book)