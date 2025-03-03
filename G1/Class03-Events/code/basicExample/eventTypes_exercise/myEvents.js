import { EventEmitter } from "node:events";
import EventTypes from "./eventTypes.js";

const emitter = new EventEmitter();

// Register all events
// same as emitter.on("info-event",
emitter.on(EventTypes.info, () => {
  console.log("Info event trigerred!");
});

// same as emitter.on("warning-event",
emitter.on(EventTypes.warning, () => {
  console.log("Warning event trigerred!");
});

// same as emitter.on("error-event",
emitter.on(EventTypes.error, () => {
  console.log("Error event trigerred!");
});

export default emitter;
