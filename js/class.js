"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    Person.prototype.run = function () {
        console.log(this.name);
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    return Person;
}());
var p = new Person("zhangsan");
p.run();
p.setName("lisi");
console.log(p.getName());
// ts中实现继承
var Bird = /** @class */ (function () {
    function Bird(name, can, voice) {
        this.name = name;
        this.can = can;
        this.voice = voice;
    }
    Bird.prototype.shout = function () {
        console.log(this.name + "shout" + this.voice);
    };
    return Bird;
}());
var b = new Bird("bird", "fly", "zeze");
b.shout();
var Penguin = /** @class */ (function (_super) {
    __extends(Penguin, _super);
    function Penguin(name, can, voice) {
        return _super.call(this, name, can, voice) || this;
    }
    return Penguin;
}(Bird));
var pen = new Penguin("penguin", "swin", "jiji");
pen.shout();
var Ostrich = /** @class */ (function (_super) {
    __extends(Ostrich, _super);
    function Ostrich(name, can, voice) {
        return _super.call(this, name, can, voice) || this; // 初始化父类构造方法
    }
    Ostrich.prototype.do = function () {
        console.log(this.name + "can" + this.can);
    };
    Ostrich.prototype.shout = function () {
        return this.name + " --shout-- " + this.voice + " --son function--";
    };
    return Ostrich;
}(Bird));
var ost = new Ostrich("ostrich", "run", "gaga");
console.log(ost.shout());
ost.do();
// 类修饰符  public(默认) private protected(保护类型 在当前类里和子类里访问，在类外部没法访问)
var Bird2 = /** @class */ (function () {
    function Bird2(name, can, voice) {
        this.name = name;
        this.can = can;
        this.voice = voice;
    }
    Bird2.prototype.shout = function () {
        console.log(this.name + "shout" + this.voice);
    };
    Bird2.print = function () {
        console.log(this.printValue + "\u6216\u8005" + Bird2.printValue);
    };
    Bird2.printValue = "静态属性"; // 静态属性
    return Bird2;
}());
var b2 = new Bird2("bird", "fly", "zeze");
Bird2.print();
var Penguin2 = /** @class */ (function (_super) {
    __extends(Penguin2, _super);
    function Penguin2(name, can, voice) {
        return _super.call(this, name, can, voice) || this;
    }
    Penguin2.prototype.do = function () {
        console.log(this.name + "can" + this.can);
    };
    Penguin2.prototype.shout = function () {
        return this.name + " --shout-- " + this.voice + " --son function--";
    };
    return Penguin2;
}(Bird2));
var pen2 = new Penguin2("penguin", "swin", "jiji");
console.log(pen2.name);
console.log(pen2.can);
console.log(pen2.voice);
// 多态
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log("eat");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        return this.name + "吃肉";
    };
    return Dog;
}(Animal));
var Rabbit = /** @class */ (function (_super) {
    __extends(Rabbit, _super);
    function Rabbit(name) {
        return _super.call(this, name) || this;
    }
    Rabbit.prototype.eat = function () {
        return this.name + "吃草";
    };
    return Rabbit;
}(Animal));
var dog = new Dog("dog");
console.log(dog.eat());
var rabbit = new Dog("rabbit");
console.log(rabbit.eat());
// 抽象
var Animal2 = /** @class */ (function () {
    function Animal2(name) {
        this.name = name;
    }
    Animal2.prototype.run = function () {
        console.log("可不实现");
    };
    return Animal2;
}());
// var a = new Animal2() 错误写法
var Dog2 = /** @class */ (function (_super) {
    __extends(Dog2, _super);
    function Dog2(name) {
        return _super.call(this, name) || this;
    }
    Dog2.prototype.eat = function () {
        console.log(this.name + "吃粮食");
    };
    return Dog2;
}(Animal2));
var dog2 = new Dog2("小黑");
dog2.eat();
var Cat2 = /** @class */ (function (_super) {
    __extends(Cat2, _super);
    function Cat2(name) {
        return _super.call(this, name) || this;
    }
    Cat2.prototype.eat = function () {
        console.log(this.name + "吃老鼠");
    };
    return Cat2;
}(Animal2));
var cat2 = new Cat2("小花");
cat2.eat();
// 只读属性
var ReadOnly = /** @class */ (function () {
    function ReadOnly(age, name) {
        this.age = age;
        this.name = name;
    }
    ReadOnly.prototype.print = function () {
        console.log(this.name + " + " + this.age);
    };
    return ReadOnly;
}());
var r = new ReadOnly(1, "zhangsan");
r.print();
r.name = "lisi";
r.age = 20; // 测试了下ts文件会报错但转成js后运行不会报错
r.print();
