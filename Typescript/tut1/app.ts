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

console.log(e)

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

console.log(obj)