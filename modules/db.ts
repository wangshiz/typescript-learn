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

class MsSQL<T> implements DBI<T> {
  add(info: T): void {
    console.log(info)
  }
  update(info: T, id: string): void {
    console.log(info, id)
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

export {MySQL, MsSQL, MongoDB}