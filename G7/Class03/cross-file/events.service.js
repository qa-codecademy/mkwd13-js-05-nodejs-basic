import { EventEmitter } from "events"; // BUILT-IN-MODULE (EXISTS IN NODEJS)
import { EVENTS } from "./events.const.js";

const eventEmitter = new EventEmitter();

// WE ARE EMMITTING THIS EVENT, ON SUCCESS REGISTER
eventEmitter.on(EVENTS.REGISTER_SUCCESS, (username, id) => {
    console.log(`User: ${username} successfully registered. ID: ${id}`)
});

export default eventEmitter;