const fs = require('fs');
setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer Expired"),0); 

Promise.resolve("Promise").then(console.log);
fs.readFile("./file.txt","utf-8",() => {
    setTimeout(() => console.log("2nd Timer"),0); 

    process.nextTick(() => console.log("2nd nextTick"));

    setImmediate(() => console.log("2nd setImmediate"));

    console.log("File Reading CB");
});
   
process.nextTick(() => console.log("nextTick"));

console.log("Last line of the file");

//Last line of the code
//nextTick
//Promise
//Timer Expired
//setImmediate
//File Reading CB
//2nd nextTick
//2nd setImmediate
//2nd Timer


//most important example to understand where event loop waits when there is nothing in callback queues and call stack is empty
