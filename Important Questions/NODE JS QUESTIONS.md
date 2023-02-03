### Q. Explain in brief, what is Node.js?

Node.js is a cross-platform runtime environment for executing javascript code.
It was built on google chrome's v8 engine .

### Q. How is node js non-blocking?

Node. js is based on an event-driven non-blocking I/O model.
Non-Blocking nature of node. js simply means that node. js proceeds with the execution of the program instead of waiting for long I/O operations or HTTP requests.
I/O operations are offloaded to the C++ APIs.

### Q. What is throughput?

Throughput is a measure of how many units of information a system can process in a given amount of time.

### Q. How is Node js having high IO throughput?

As nodejs is asynchronous and non-blocking language. It means all the IO doesn't block any other operations.

### Q. What are CPU intensive tasks?

The tasks which require a lot of cpu resources.
A few of such processes can slow down your server. So you need to optimize your code to give best performance.
For example, Node js main thread handles all syncronous tasks

### Q. How can you end up blocking your main thread in node.js?

By using long IO tasks or http requests synchronously.
For example using readfilesync instead of readFile will block the main thread.

### Q. What is event loop?

The event loop is a mechanism that allows JavaScript to perform non-blocking asyncronous operations. When an asynchronous task is started, the event loop will start running. Once the task is completed, the event loop will again check for any other tasks that need to be performed.
When js encounters asynchronous operation, it will be sent to a diffrent computing process, in browser it will be sent to Browser API, where it will complete its task, like set timeout will complete its time, then from there it will be sent to the event queue, which will be processed by nodejs once the call stack is empty.

### Q. What are different phases in event loop?

Timers, I/O callbacks, preparation / idle phase, I/O polling, setImmediate() callbacks execution, and close events callbacks are the six primary phases of the Event Loop

### Q. What is process.tick?

Every time the event loop takes a full trip, we call it a tick.
OR...
When in Node JS, one iteration of the event loop is completed. This is known as a tick. process. nextTick() taking a callback function which is executed after completing the current iteration/tick of the event loop.

### Q. When can process.tick starve your event loop?

Executing long-running codes in the nextTickQueue can starve the execution of different phases of the event loop’s iteration.

### Q. What is the difference between setTimeout and setInterval?

Set timeout runs only once, then its cleared out, but setInterval runs continuously again and again till it is cleared with clearInterval.

### Q. How can you make a network request with http module from the backend?

Importing https module
Setting up the config object
A callback seperated with comma, and response as argument.
res.on ('data' / end / error , callback for what to do with that data)

### Q. How can you create your own events?

Using the CustomEvent constructor

### Q. What are clusters?

The cluster module enables creating child processes (workers) that run simultaneously while sharing the same server port.

### Q. How does your Node.js application handle scale? Elaborate.

### Q. What is the difference between readFile and readFileSync?

### Q. What are CORS? How do you configure them? Why do you need them?

Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. It is a great security feature to prevent the client from making requests with diffrent origin.

### Q. What is rate limiting?

Rate limiting is used to control the rate of requests sent or received by a network interface controller. It can be used to prevent DoS attacks and limit web scraping.

### Q. How does middlewares work in express?

Middleware functions are functions that have access to the request object ( req ), the response object ( res ), and the next function in the application's request-response cycle.

### Q. What is the difference between Encryption and Hashing?

Encryption is a two way process, where the data can be decrypted to make it readable again, but it is not readable when in encrypted form.
Hashing on other way is a one way ticket, where it can be hashed and will not be decrypted ever again.
Salting adds random characters before or after a password prior to hashing to obfuscate the actual password.

### Q. What is the difference between https and http?

### Q. What is TLS?

Transport Layer Security (TLS) encrypts data sent over the Internet to ensure that eavesdroppers and hackers are unable to see what you transmit

### Q. What is AES?

Advanced Encryption Standard AES uses symmetric key encryption, which involves the use of only one secret key to cipher and decipher information.

### Q. What is JWT Token? Why do we need to use JWT? What are some pros and cons?

JSON Web Tokens JWT authentication is a token-based stateless authentication mechanism.
It has header, payload and signature.
