/**
 * 功能 定义一个操作数据库的库  支持mysql mssql mongodb
 * 要求1 mysql mssql mongodb 功能一样 都有crud方法
 * 注意 约束统一的规范 以及代码宠用
 * 
 * 解决方案 需要约束规范所以要定义接口 需要代码重用所以用到泛型
 *  1.接口：在面向对象的编程中，接口时一种规范的定义  他定义了行为和动作的规范
 *  2.泛型 通俗理解 泛型就是解决 类 接口 方法的复用
 */

class Book {
  name:string | undefined
  no:string | undefined
  cate:string | undefined
}

interface DBI<T> {
  add(info:T):void
  update(info:T, id:string):void
  delete(id:string):void
  get(id:string):T
  getAll():Array<T>
}

class MongoDB<T> implements DBI<T> {
  add(info: T): void {
    console.log(info)
  }
  update(info: T, id: string): void {
    console.log(info, id)
  }
  delete(id: string): void {
    console.log(id)
    throw new Error("Method not implemented.");
  }
  get(id: string): T {
    var list:Array<T> = []
    return list[0]
  }
  getAll(): T[] {
    var list:Array<T> = []
    return list
  }
}

var book = new Book()
book.name = "das"
book.cate = "dasd"
book.no = "12"

var dbbook = new MongoDB<Book>()
dbbook.add(book)

class MsSQL<T> implements DBI<T> {
  add(info: T): void {
    throw new Error("Method not implemented.");
  }
  update(info: T, id: string): void {
    throw new Error("Method not implemented.");
  }
  delete(id: string): void {
    throw new Error("Method not implemented.");
  }
  get(id: string): T {
    throw new Error("Method not implemented.");
  }
  getAll(): T[] {
    throw new Error("Method not implemented.");
  }
}

class MySQL<T> implements DBI<T> {
  add(info: T): void {
    throw new Error("Method not implemented.");
  }
  update(info: T, id: string): void {
    throw new Error("Method not implemented.");
  }
  delete(id: string): void {
    throw new Error("Method not implemented.");
  }
  get(id: string): T {
    throw new Error("Method not implemented.");
  }
  getAll(): T[] {
    throw new Error("Method not implemented.");
  }
}