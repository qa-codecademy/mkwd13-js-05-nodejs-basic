// import { EventEmitter } from "events";
// importing from node:events prevents conflicts if you have a local events.js file or an events package installed via npm.
import { EventEmitter } from "node:events";
export const emitter = new EventEmitter();

// Create a custom class that inherits from EventEmitter
class MyEmitter extends EventEmitter {}

export const myEmitter = new MyEmitter();

// REGISTER EVENT
emitter.on("order-pizza", function (size) {
  console.log("From regular function");
  console.log(`Order received, making a ${size} pizza`);
  // Will return the event object details
  // console.log("From regular function", this);
});

emitter.on("order-pizza-arrow", (size) => {
  console.log("From arrow function");
  console.log(`Order received, making a ${size} pizza`);
  // Will return undefined, since this does not refer to the event in the arrow function
  // console.log("From arrow function", this);
});

// FIRE (TRIGGER) EVENT
// emitter.emit("order-pizza", "large");
// emitter.emit("order-pizza-arrow", "medium");

const function1 = () => {
  console.log("Message from function 1");
};

const function2 = () => {
  console.log("Message from function 2");
};

const function3 = () => {
  console.log("Message from function 3");
};

const function4 = () => {
  console.log("Message from function 4");
};

const function5 = () => {
  console.log("Message from function 5");
};

const function6 = () => {
  console.log("Message from function 6");
};

// Add event listeners to existing event
emitter.on("myEvent", function1);
emitter.on("myEvent", function2);
emitter.on("myEvent", function2);

// Same as emitter.on()
emitter.addListener("myEvent", function3);

// List all listeners for "myEvent"
// console.log(emitter.listeners("myEvent"));

// List total number of listeners for "myEvent"
// console.log(emitter.listenerCount("myEvent"));

// Attach a one-time listener using once
emitter.once("myEvent", function4);

// Attach a listener that will be executed before all listeners
emitter.prependListener("myEvent", function5);

// Attach a prepended one-time listener that will be executed onlu once, no matter how many times emitter.emit("myEvent") is called
emitter.prependOnceListener("myEvent", function6);

emitter.emit("myEvent");
console.log("+++++++++++++++++++++++++");
emitter.emit("myEvent");

// Remove one listener
// If there are multiple listeners from the sam handler function, the removeListener should be called multiple times
// emitter.removeListener("myEvent", function2);

myEmitter.on("anotherEvent", () => {
  console.log("Event emitted from myEmitter");
});

// Remove all Listeners
// emitter.removeAllListeners("myEvent");
// myEmitter.emit("anotherEvent");
