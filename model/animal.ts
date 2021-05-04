export namespace A {
  class Animal {
    name:string
    constructor(name:string) {
      this.name = name
    }
    eat():void {
      console.log("eat")
    }
  }
  
  export class Dog extends Animal {
    constructor(name:string) {
      super(name)
    }
  
    eat():string {
      return this.name + "吃肉"
    }
  }
  
  export class Rabbit extends Animal {
    constructor(name:string) {
      super(name)
    }
  
    eat():string {
      return this.name + "吃草"
    }
  }
}

namespace B {
  class Animal {
    name:string
    constructor(name:string) {
      this.name = name
    }
    eat():void {
      console.log("eat")
    }
  }
  
  export class Dog extends Animal {
    constructor(name:string) {
      super(name)
    }
  
    eat():string {
      return this.name + "吃肉"
    }
  }
  
  export class Rabbit extends Animal {
    constructor(name:string) {
      super(name)
    }
  
    eat():string {
      return this.name + "吃草"
    }
  }
}

export {B}