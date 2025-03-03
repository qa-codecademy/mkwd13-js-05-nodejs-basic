import { EventEmitter } from 'events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('greet', (name, surname) => {
	console.log(`Hello ${name} ${surname}!`);
});

// myEmitter.emit('greet', 'Ivo', 'Kostovski');
// myEmitter.emit('greet', 'Daniel', 'Ivtimov');
// myEmitter.emit('greet', 'Martin', 'Panovski');
// myEmitter.emit('greet', 'Petar', 'Petrovski');

myEmitter.once('welcome', () => {
	console.log('Welcome to this app');
});

myEmitter.emit('welcome');
myEmitter.emit('welcome');
myEmitter.emit('welcome');
