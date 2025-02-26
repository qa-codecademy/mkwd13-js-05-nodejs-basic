// ** Import all as <SOME_NAME> **
// import * as mathOperations from './math-operations.js';

// const sumResult = mathOperations.add(1, 2);
// console.log('sumResult', sumResult);

// const subtractResult = mathOperations.subtract(10, 5);
// console.log('subtractResult', subtractResult);

// ** Destructing the methods while importing **
// import { add, subtract } from './math-operations.js';

// const sumResult = add(1, 2);
// console.log('sumResult', sumResult);

// const subtractResult = subtract(10, 5);
// console.log('subtractResult', subtractResult);

// Destructuring example
// const ivo = {
// 	name: 'Ivo',
// 	age: 35,
// };

// const { name } = ivo;
// console.log(`Hi my name is ${name}`);

// ** Default Exports and Imports  **

// import Person from './person.js';

// const ivo = new Person('Ivo', 35);
// ivo.introduce();

// const daniel = new Person('Daniel', 21);
// daniel.introduce();

// Named exports

import { capitalize, reverse } from './string-operations.js';

console.log(capitalize('iVO', 123));

console.log(reverse('skopje'));

console.log(reverse('bitola'));

console.log('this will be logged without rerun 2');

// npm install -g <NAME_OF_PACKAGE>
// g is global => Installs globally in the system (computer)

// npm install --save <NAME_OF_PACKAGE>
// --save is already set by default
// installs as project dependency

// npm install --save-dev <NAME_OF_PACKAGE>
// OR
// npm install -D <NAME_OF_PACKAGE>
// --save-dev OR -D installs the package as DEV dependency
