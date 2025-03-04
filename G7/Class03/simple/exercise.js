// TODO: Import the events module
import {EventEmitter} from "events";

// TODO: Create a new EventEmitter object called 'website'
const website = new EventEmitter();

// TODO: Register an event handler for 'newUser' that logs a welcome message
//       The handler should accept a 'username' parameter
website.on('newUser', (username) => {
    console.log(`Hello ${username}!`);
});

// TODO: Trigger the 'newUser' event with a sample username
website.emit('newUser', 'John Doe');

function welcomeUser(username){
    website.emit('newUser', username);
}

welcomeUser('Bob Bobski');

welcomeUser('Jane Lee');