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
Object.defineProperty(exports, "__esModule", { value: true });
exports.B = exports.A = void 0;
var A;
(function (A) {
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
    A.Dog = Dog;
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
    A.Rabbit = Rabbit;
})(A = exports.A || (exports.A = {}));
var B;
(function (B) {
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
    B.Dog = Dog;
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
    B.Rabbit = Rabbit;
})(B || (B = {}));
exports.B = B;
