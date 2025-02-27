/**
 *  fs => file system module, gives IO (input-output) access in the system.
 */

import fs from "fs"; // BUILT-IN MODULE
import fsPromises from "fs/promises"; // BUILT-IN MODULE


console.log('****** SYNCRONOUS FILE SYSTEM OPERATIONS ******');

// WRITING TO FILE
//writeFileSync(PATH_TO_THE_FILE, VALUE_TO_WRITE)
fs.writeFileSync("./my_text.txt", "Hello from nodejs");


const moviePath = "movie.txt";
const movieTitle = "Shawshenk Redemption";

// If the file does not exist, it will create it for you.
fs.writeFileSync(moviePath, movieTitle);

// Overwrite the values;
fs.writeFileSync(moviePath, "Batman The Dark Knight Rises");


// APPENDING TO FILE
fs.appendFileSync(moviePath, "\nThe Godfather");
fs.appendFileSync(moviePath, "\nBarbie");

// READING A FILE CONTENTS
// Approach #1
// const movieFileContents = fs.readFileSync(moviePath, 'utf8');

// Approach #2
const movieFileContents = fs.readFileSync(moviePath, {encoding: 'utf8'});

console.log(movieFileContents);

const isGodfatherMovie = movieFileContents.includes('The Godfather');
console.log(isGodfatherMovie);


console.log('***** ASYNCROUNOUS FILE SYSTEAM OPERATIONS *****');

const userPath = "user.txt";
const contents = "1. Bob Bobski";

console.log('Execute', 1)
// OLDER WAY
fs.writeFile(userPath, contents, (error) => {
    if(error){
        console.error("Error occured:", error)
    };
    console.log('Execute', 2)
    console.log('Write to file async finished.')
});

console.log('Execute', 3);

// NEWER WAY
// WRITE TO FILE ASYNC
await fsPromises.writeFile(userPath, '2. John Doe');


// APPEND TO FILE ASYNC
await fsPromises.appendFile(userPath, '\n3. Lee Moo');
await fsPromises.appendFile(userPath, '\n4. Foo Boo');

// READ FILE ASYNC
const users = await fsPromises.readFile(userPath, 'utf8');
console.log(users)