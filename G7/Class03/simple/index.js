import { EventEmitter } from "events"; // BUILT-IN-MODULE (EXISTS IN NODEJS)
import { appendToLog } from "./fs.service.js"

// CREATE A NEW INSTANCE OF THE EventEmitter CONSTRUCTOR
const eventEmmitter = new EventEmitter();

// *** #1. BASIC EVENT;
/**
 * .on is same as addEventListener().
 * "ring" is the name of the event that we have given.
 * () => {} is the function that is going to execute when the event happens.
 */
eventEmmitter.on("ring", () => {
    console.log("Someone is at our door.")
});

// EVENT TRIGGERER
/**
 * .emit is emitting/triggering the event
 */
eventEmmitter.emit("ring");

// *** #2. EMIT EVENT THAT DOES NOT EXIST;

eventEmmitter.emit("dispatch") // nothing happens since this event is not existing.

// *** #3. ORDER OF EVENTS

eventEmmitter.emit("walk"); // nothing happens if we trigger event before it's defining

eventEmmitter.on("walk", () => {
    console.log('Person is walking');
});

eventEmmitter.emit('walk'); // Person is walking

// *** #4. PARAMETER WITH EVENTS

eventEmmitter.on("loggedIn", (user) => {
    const message = `\n- User: ${user.name} and email: ${user.email} logged in. At: ${new Date()}`;
    console.log(message)

    appendToLog('./loggin-logs.txt', message)
});

const userOne = {
    name: 'John Doe',
    email: 'john@mail.com'
};

const userTwo = {
    name: "Bob Bobski",
    email: "bobski@mail.com"
};

eventEmmitter.emit("loggedIn", userOne);
eventEmmitter.emit("loggedIn", userTwo);

// *** #5. MULTIPLE PARAMETERS WITH EVENTS
eventEmmitter.on("forecast", (degrees, time, location) => {
    const recordedForecast = `In ${location} the temp. is: ${degrees}C measured at: ${time}`

    console.log(recordedForecast)
});

eventEmmitter.emit("forecast", "9", "19:18", "Gevgelija");

// *** #6. EVENTS EMITTING OTHER EVENTS;

eventEmmitter.on("three", () => {
    console.log("EVENT THREE!");
});

eventEmmitter.on("two", () => {
    console.log("EVENT TWO!")

    eventEmmitter.emit("three");
});

eventEmmitter.on("one", () => {
    console.log("EVENT ONE");

    eventEmmitter.emit("two")
});

eventEmmitter.emit("one");

// *** #7. EVENTS CAN BE CHAINED;

eventEmmitter
.on('first', () => {
    console.log('FIRST')
})
.on("second", () => {
    console.log('SECOND')
})
.on('third', () => {
    console.log('THIRD')
});


eventEmmitter.emit('first');
eventEmmitter.emit('second');