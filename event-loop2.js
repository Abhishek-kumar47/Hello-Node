const fs = require('fs');
const a=100;
setImmediate(() => console.log("setImmediate"));

Promise.resolve("Promise").then(console.log);
fs.readFile("./file.txt","utf-8",() => {
    console.log("File Reading CB");
});
setTimeout(() => console.log("Timer Expired"),0);    

process.nextTick(() => console.log("process.nextTick"));
function print(){
    console.log("a= ",a);
}
print();
console.log("Last line of the file");

//a= 100
//Last line of the file
//process.nextTick
//promise
//Timer Expired
//setImmediate
//File Reading CB