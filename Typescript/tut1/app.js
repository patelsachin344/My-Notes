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
var a = "sachin";
// console.log(a)
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.print = function () {
        console.log(a + " is a tester");
    };
    return Test;
}());
var ans = new Test;
// ans.print()
var b = function () {
    return console.log("hello fat aero function");
};
// b()
var c = "adsf";
var d = 5;
// let e:number[] = [1,2,3,4,5]
// e.push("as") error
// e.push(100)
var e = [1, 2, 3, 4, 5, "vf", false];
e.push("ds");
e.push(true);
var obj = {
    name: "sachin",
    age: 23,
    address: "dsa"
};
var obj1 = {
    name: "sachin",
    age: 23,
    address: "dsa"
};
// obj.name = "patel"
// obj.name = 12 error
// console.log(obj)
var f = "any";
f = 23;
f = [];
var g = [];
var h = {
    name: "no name",
    age: 30,
    print: function () {
        return this.name;
    }
};
// console.log(h.print())
// function add (a,b):number {
//     return a+b
// }
// console.log(typeof add(1 , "D")) // string
function add(a, b) {
    return b ? a + b : a;
}
// console.log( add(1 ))
var App = /** @class */ (function () {
    function App(name) {
        this.fname = "fname";
        this.fname = name;
    }
    App.prototype.getprint = function (age) {
        console.log(this.fname + age);
    };
    return App;
}());
var app = new App("sachin");
// app.getprint(23)
// inheritance 
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.setName = function (name) {
        return this.name = name;
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // name="child";
    Child.prototype.getName = function () {
        return this.name;
    };
    return Child;
}(Parent));
var child = new Child();
child.setName("from parent");
console.log(child.getName());
