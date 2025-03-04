import { v4 as uuidv4 } from 'uuid'; // EXTERNAL PACKAGE
import fs from 'fs'; // BUILT-IN MODULE
import eventEmitter from './events.service.js'; // LOCAL-MODULE
import { EVENTS } from './events.const.js';

export const registerUser = (email, password) => {
    // 1. CREATE THE USER
    const user = {
        id: uuidv4(),
        email,
        password
    }

    console.log(user);

    // 2. READ THE JSON CONTENT
    const users = fs.readFileSync('./db/users.json', 'utf8');
    console.log(users)

    // 3. PARSE THE JSON CONTENTS
    const parsedUsers = JSON.parse(users);
    console.log(parsedUsers)
    // 4. ADDING THE NEWLY CREATED user OBJECT IN THE PARSED-USERS LIST
    parsedUsers.push(user)
    // WRITE BACK IN THE JSON
    // 5. SAVING BACK THE USERS LIST INTO THE JSON FILE, NOTE: WE MUST STRINGIFY IT
    fs.writeFileSync('./db/users.json', JSON.stringify(parsedUsers, null, 2)); // null and 2 are going to save the values formatted

    // 6. EMITTING THE REGISTER SUCCESS EVENT
    eventEmitter.emit(EVENTS.REGISTER_SUCCESS, email, user.id)

}