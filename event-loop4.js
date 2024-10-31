const fs = require('fs');
const { nextTick } = require('process');

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer Expired"),0); 

Promise.resolve("Promise").then(console.log);
fs.readFile("./file.txt","utf-8",() => {
    console.log("File Reading CB");
});
process.nextTick(() => {     /*nextTick callback queue has the highest priority, if there if nexttick inside another nexttick so it will keep call it again and again. so it will move to the next phase only when the nextTick queue is empty*/
    process.nextTick(() => console.log("inner nextTick"));
    console.log("nextTick");
});
console.log("Last line of the code");

//Last line of the code
//nextTick
//inner nextTick
//promise
//Timer Expired
//setImmediate
//File Reading CB