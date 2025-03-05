import eventEmitter from "./events.service.js";
import { EVENTS } from "./events.const.js";
import { registerUser } from "./users.service.js";

eventEmitter.emit(EVENTS.REGISTER_SUCCESS, 'bob_username', 1);

// UNCOMMENT TO SEE THE REGISTER FLOW
registerUser("john@mail.com", "john.password")
registerUser("bob@mail.com", "bob.password")