### Q. Give an example where call apply bind is required?

    call() - you can tie a function into an object as if it belonged to the object
        function_name.call(object_name, argument 1, argument 2)       ==> function can use this.key_name to access the object.

    apply() - same as call, but argument taken as array
        function_name.apply(object_name, [argument 1, argument 2] )

    bind() - instead of executing the function, bind returns the function, which can be called to get the value;
        const return_function = function_name.apply(object_name, [argument 1, argument 2] )
        return_function()

```
let car1 = {
  name: "Maruti",
  color: "red",
  price: "10Lpa",
};
let car2 = {
  name: "Tata",
  color: "White",
  price: "7Lpa",
};

let print = function (quantity, oil) {
  console.log(this.name, this.color, this.price, quantity, oil);
};
// car1.print();
print.call(car1, 5, "Petrol");

// car1.print.call({ ...car2, price: "9Lpa" });
print.call({ ...car2, price: "9Lpa" }, 5, "diesel");

print.apply(car2, [4, "Petrol"]);

const printData = print.bind(car2, 10, "petrol");
printData();

```

## bind polyfills

```
Function.prototype.myBind = function (...args) {
  let obj = this;
  let param = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...param, ...args2]);
  };
};
let data = print.myBind(car1, 10, "Petrol");
data(180);
```

### Q. What is the difference between readFile and readFileSync?

    In fs. readFile() method, we can read a file in a non-blocking asynchronous way, but in fs. readFileSync() method, we can read files in a synchronous way,

### Q. What does process in node.js mean?

    The process object in Node. js is a global object that can be accessed inside any module without requiring it.

### Q. Explain what node.js is?

    Cross-platform runtime environment for executing JavaScript code

### Q. What is the difference of JS from browser to JS on node.js

    Browser js control limited to just browser only, with objects like window, location and document.
    Node.js has has full system access (read write files), and has global and require objects

### Q. Write a program to check two objects are equal ( deep equal )

        if (obj1Length === obj2Length) {
                    return Object.keys(obj1).every(
                        key => obj2.hasOwnProperty(key)
                            && obj2[key] === obj1[key]);
                }
                return false;

Function statement / Function Declaration :- the function is normally defined and can be used later on
Function expression :- the function is first created and assigned to a variable so that it can be called by its variable name and unless it is defined, it cannot be executed otherwise it throws out "Uncaught TypeError"

Anonymous function :- function where there is no need to define name for the function, it just can be assigned to variable

Named function : Normal function with its name assigned to a variable !!In this case you cannot call function by its name in outer scope!! (Scope Chain)

first class Functions / first class citizens :-

1. used as values
2. can be passed as argument
3. can be executed inside a closured function
4. can be taken as return

### Q.. What is call Stack ?

A. JavaScript is single threaded language ,it has one call stack and it can only do one task at a time,
this call stack present in JavaScript engine and all the JavaScript code execute in call stack.

### Q.. What is the call back function?

A. when we call the function with the arguments, and we give arguments as the function that function calls as a call back function.
Function that is passed on as argument to another function is called callback function.

### Q.. what is the event listener?

A. when we want to do some task with html's elements the we use event listener and that time we want to
do some task when event triggered ,these tasks we do in a function that function called as a callback
function.

### Q.. What is the garbage collector ?

A. When we assigned a variable and we use this variable in function but when we call function that time
this variable not dependent on the called function that time this variable goes in garbage collection.

1. Event listeners consume a lot of memory which can potentially slow down the website therefore
   it is good practice to remove if it is not used.
2. setTimeout helps turn JS which is singlethreaded and synchronous into asynchronous.
3. Event listeners can also invoke closures with scope.

Event Loop :-

1. Browser has superpowers that are lent to JS engine to execute some tasks, these superpowers include web API's such as console, location, DOM API, setTimeout, fetch, local storage.
2. Callback functions and event handers are first stored in Web API environment and then transferred to callback queue.
3. Promises and mutation observer are stored in API environment and then transferred to microtask queue.
4. Event loop continuously observes call stack and when it is empty it transfers task to call stack.
5. Micro task is given priority over callback tasks.
6. Too many micro tasks generated can cause Starvation (nit giving time to callback tasks to execute).

The Event Loop pushes the "queue" into the Call Stack only when the Call Stack is empty (i.e. the global execution context has been pushed off the call stack).
The order in which the Event Loop works is:

1. Call Stack
2. Microtask Queue
3. Callback Queue

The two problems that we faced in callbacks are:-

1. Callback Hell: Asynchronous operations in JavaScript can be achieved through callbacks. Whenever there are multiple dependent Asynchronous operations it will result in a lot of nested callbacks. This will cause a 'pyramid of doom' like structure.
2. Inversion of control: When we give the control of callbacks being called to some other API, this may
   create a lot of issues. That API may be buggy, may not call our callback and create order as in the
   above example, may call the payment callback twice etc.

1) What are Promises?
   Promises are objects which are used to perform asynchronous operations. They are just like placeholders
   to store a future value that will be returned after some time. They contain two properties: PromiseState
   and PromiseResult.

-> Promise is an object that represents the eventual completion of an asynchronous operation.
Promises are immutable so it can't be altered as a result it helps to get rid off inversion
of control that would be occurred in case callback and by chaining of promises we can get out of the
callback hell.
-> In chaining of promises we should use return to get the promise result so that we don't miss anything
from the chain.

2.  Importance of Promises:
    a) Promises can help us to write trust worthy code.
    b) Promises are used to solve the problems of callbacks like inversion of control and callback hell.
    c) They give us the result prompt in three states: 1) Pending 2) Fulfilled 3) Rejected
    d) We can attach function to promise object and retrieve its value unlike callbacks no need to pass the
    function.
    e) Nesting can be done in Promises and with the help of that we can return the values in each individual
    chain.

1.  The setTimeout function stores it in the callback queue which is executed only after call stack is empty, even if setTimeout is set to 0ms.
1.  setTimeout ensures that minimum it will take the time mentioned because it may be paused due to call stack not empty.
