import { EventEmitter } from "node:events";
import * as fs from "fs";

// Create an instance of the EventEmitter class
const myEmitter = new EventEmitter();

// Define an event handler that logs text to a file
myEmitter.on("my-event", () => {
  const message = "Event was trigerred!\n";

  fs.appendFile("log.txt", message, (err) => {
    if (err) {
      console.log("Error writing to file", err.message);
    } else {
      console.log("Log written to file");
    }
  });
});

// Trigger the event
myEmitter.emit("my-event");
myEmitter.emit("my-event");
myEmitter.emit("my-event");
myEmitter.emit("my-event");
