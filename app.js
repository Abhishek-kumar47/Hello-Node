require("./xyz.js");
const { calculateSum , calculateMultiply} = require("./calculate");
const data = require("./data.json");
var a=10;

var b =20;
console.log(data);
calculateSum(a,b);
calculateMultiply(a,b);
console.log(globalThis === global);
console.log(globalThis === this);
