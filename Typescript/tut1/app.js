"use strict";
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
console.log(e);
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
console.log(obj);
