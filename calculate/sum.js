//console.log("sum module executed");
function calculateSum(a,b){
    const sum = a+b;
    console.log(sum);
}
module.exports = {calculateSum};
//module.exports.x = x;
//module.exports.calculateSum = calculateSum; another syntax to write module.exports