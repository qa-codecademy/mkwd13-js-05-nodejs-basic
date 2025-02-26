const calculator = require('./calculator');
const greetings = require('./greetings');

const sumResult = calculator.add(1, 2);

console.log(sumResult);

console.log(greetings.sayHello('Ivo'));

console.log(greetings.sayGoodbye('Ivo'));
