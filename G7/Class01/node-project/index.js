// npm => node package manager
// npm init => inits a node js project

// Syntax #1
// const mathModule = require('./math.js')
// console.log(mathModule)
// console.log(mathModule.add(2, 5));

// console.log(mathModule.multiply(5, 4));

// Syntax #2
const {add, substract, multiply} = require('./math.js')

console.log(add(2, 4));

const substractResult = substract(10, 5);
console.log(substractResult);