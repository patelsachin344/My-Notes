export  {}

let a = "sachin"
// console.log(a)

class Test {
    print(){
        console.log(a + " is a tester")
    }
}
let ans = new Test

// ans.print()

const b = ()=> {
    return console.log("hello fat aero function")
}
// b()


let c:string = "adsf"
let d:number = 5
// let e:number[] = [1,2,3,4,5]
// e.push("as") error
// e.push(100)

let e = [1,2,3,4,5,"vf",false]
e.push("ds")
e.push(true)

// console.log(e)

interface objType {
    name: string,
    age:number,
    address:string
}

let obj:objType = {
    name:"sachin",
    age:23,
    address:"dsa"
}
let obj1:any = {
    name:"sachin",
    age:23,
    address:"dsa"
}
// obj.name = "patel"
// obj.name = 12 error

// console.log(obj)

let f:string|number|[] = "any"
f = 23
f = []
let g:{}= []

interface hType {
    name:string,
    age:number,
    print:()=>{}
}
let h:hType = {
    name:"no name",
    age:30,
    print:function (){
        return this.name
    }
}
// console.log(h.print())

// function add (a,b):number {
//     return a+b
// }
// console.log(typeof add(1 , "D")) // string
function add (a,b?):number {
    return b? a+b :a
}
// console.log( add(1 ))


class App {
    fname = "fname"
    constructor(name:string){
        this.fname = name
    }
    getprint(age:number){
        console.log(this.fname + age)
    }
}
const app = new App("sachin")
// app.getprint(23)


// inheritance 

class Parent {
    name;
    setName(name:string):string{
        return this.name = name
    }
}
class Child extends Parent{
    // name="child";
    getName():string{
        return this.name
    }
}

let child = new Child()
child.setName("from parent")
console.log(child.getName())