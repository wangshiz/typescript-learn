/**
 * 命名空间和模块的区别
 * 命名空间：内部模块，主要用于组织代码，避免命名冲突
 * 模块：ts的外部模块的简称，侧重代码的复用，一个模块里可能会有多个命名空间
 */

// namespace A {
//   class Animal {
//     name:string
//     constructor(name:string) {
//       this.name = name
//     }
//     eat():void {
//       console.log("eat")
//     }
//   }
  
//   export class Dog extends Animal {
//     constructor(name:string) {
//       super(name)
//     }
  
//     eat():string {
//       return this.name + "吃肉"
//     }
//   }
  
//   export class Rabbit extends Animal {
//     constructor(name:string) {
//       super(name)
//     }
  
//     eat():string {
//       return this.name + "吃草"
//     }
//   }
// }

// namespace B {
//   class Animal {
//     name:string
//     constructor(name:string) {
//       this.name = name
//     }
//     eat():void {
//       console.log("eat")
//     }
//   }
  
//   export class Dog extends Animal {
//     constructor(name:string) {
//       super(name)
//     }
  
//     eat():string {
//       return this.name + "吃肉"
//     }
//   }
  
//   export class Rabbit extends Animal {
//     constructor(name:string) {
//       super(name)
//     }
  
//     eat():string {
//       return this.name + "吃草"
//     }
//   }
// }
import {A, B} from "./model/animal"
var dog = new A.Dog("小狗")
console.log(dog.eat())
var dog = new B.Rabbit("小兔")
console.log(dog.eat())