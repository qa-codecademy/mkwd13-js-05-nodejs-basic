import { EventEmitter } from "node:events";
import { myEmitter } from "./events.js";
import { emitter as oldEmitter } from "./events.js";

const emitter = new EventEmitter();
emitter.emit("order-pizza", "small"); // Wont fire an event because it is a completely different instance of the EventEmittr class
oldEmitter.emit("order-pizza", "small");
myEmitter.emit("anotherEvent"); // This will fire the event because we import the instance from the events.js file
