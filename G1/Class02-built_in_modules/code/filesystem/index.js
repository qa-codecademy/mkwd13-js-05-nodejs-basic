// Importing built-in Node.js modules
import path from "path"; // Handles file and directory paths
import fs from "fs"; // Provides file system operations (read/write files, directories, etc.)
import os from "os"; // Retrieves operating system information
import querystring from "querystring"; // Retrieves data from api query parameters
import { fileURLToPath } from "url";

// Importing NPM packages
import { v4 as uuidv4 } from "uuid";

// FILE SYSTEM module
const absoluteFilePath =
  "D:SEDCSEDC13\\04.NodeJSBasicmkwd13-js-05-nodejs-basicG1Class02-built_in_modulescode\filesystemindex.js";
// Get  __filename and __dirname equivalents for ES modules
console.log("File URL", import.meta.url);

// Current file path
const __filename = fileURLToPath(import.meta.url);
console.log("Filename path", __filename);

// Current directory path
const __dirname = path.dirname(__filename);
console.log("Dirname path", __dirname);

// File extension
const fileExtension = path.extname(__filename);
console.log("File extension", fileExtension);

// File name
const fileName = path.basename(__filename);
console.log("Current file name", fileName);

//directory name
const currentDir = path.basename(path.dirname(__filename));
console.log("Current directory:", currentDir);

// Working with filesystem
// Define directory path
const dirPath = path.join(__dirname, "test-folder");
console.log(dirPath); // D:\SEDC\SEDC13\04.NodeJSBasic\mkwd13-js-05-nodejs-basic\G1\Class02-built_in_modules\code\filesystem\test-folder
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath); // Creates a new directory synchronously
  console.log("Directory successfully created.");
} else {
  console.log("Folder already exists");
}

// Define a file path inside the newly created folder
const filePath = path.join(dirPath, "hello.txt");

// Write text content to file
fs.writeFileSync(filePath, "Hello, this text has been written via js code!");

// Read file content synchronously
const content = fs.readFileSync(filePath, "utf8"); // Reads the content of the file
console.log(content);

// List all content in the current directory
const files = fs.readdirSync(__dirname);
console.log(files);

// OS module
const platform = os.platform();
console.log(platform); // OS platform (e.g., win32, linux, darwin)

const architecture = os.arch();
console.log(architecture); // CPU architecture (e.g., x64, arm64)

const cpuCores = os.cpus(); // CPU cores
console.log(cpuCores);

const cpuCoresNumber = os.cpus().length; // Number CPU cores
console.log(cpuCoresNumber);

const totalMemory = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
console.log(totalMemory);

const userHomeDirectory = os.homedir();
console.log(userHomeDirectory);

// UUID module
const uniqueId = uuidv4();
console.log(uniqueId);

// QUERYSTRNG module

// query string is the part after the "?" character in the URL
// http://mystore.com/products?sort=price&order=desc&page=2&category=electronics&brand=Apple
const myquerysting =
  "sort=price&order=desc&page=2&category=electronics&brand=Apple";
const paresedValues = querystring.parse(myquerysting);
console.log(paresedValues);

const sort = paresedValues.sort;
console.log(sort);
const category = paresedValues.category;
console.log(category);

// const normalObject = Object.assign({}, paresedValues);
const normalObject = { ...paresedValues };
console.log(normalObject);

// VALUE VS REFERENCE TYPES
// Value types: string, number, boolean
let myName = "Aneta";
let yourName = myName;
yourName = "Igor";
console.log(myName);
console.log(yourName);

// Referrence type objects, arrays
let myArr = ["apple", "banana", "mango"];
// let yourArr = myArr;
let yourArr = [...myArr];
myArr.push("orange");
console.log(myArr);
console.log(yourArr);

let person = {
  name: "bob",
  age: 25,
};

// let newPerson = person;
let newPerson = { ...person };
newPerson.hobby = "Tennis";
console.log(person);
console.log(newPerson);
// let newPerson = JSON.parse(JSON.stringify(person));
