import emitter from "./myEvents.js";
import EventTypes from "./eventTypes.js";

// Emit the error events

// same as emitter.emit("error-event")
emitter.emit(EventTypes.info);
emitter.emit(EventTypes.warning);
emitter.emit(EventTypes.error);
