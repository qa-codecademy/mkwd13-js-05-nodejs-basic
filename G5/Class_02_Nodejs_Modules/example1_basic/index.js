import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import os from 'os';
import * as uuid from 'uuid';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// console.log('Path examples:');
// console.log('Current file:', __filename);
// console.log('Current directory:', __dirname);
// console.log('File extension', path.extname(__filename));
// console.log('File name', path.basename(__filename));
// console.log('Directory name', path.dirname(__filename)); //__dirname
// console.log('Joined path:', path.join(__dirname, 'files', 'test.txt'));

// Create a directory
const dirPath = path.join(__dirname, 'test-folder');
// console.log('dirPath', dirPath);
if (!fs.existsSync(dirPath)) {
	fs.mkdirSync(dirPath);
}

// \n is used to create new row in text files

// Write to a file
const filePath = path.join(dirPath, 'hello.txt');
// console.log(filePath);
fs.writeFileSync(filePath, 'Hello from Node JS!');

// Append text to a file
fs.appendFileSync(filePath, '\nHello again!');

// Read text from a file
const text = fs.readFileSync(filePath, 'utf-8');
// console.log(text);

// List directory content
const files = fs.readdirSync(__dirname); // ['index.js', 'package.json']
// console.log('Files in __dirname:', files);

// List directory content for test folder
const testFolderFilesPath = path.join(__dirname, 'test-folder');
const testFolderFiles = fs.readdirSync(testFolderFilesPath);
// console.log('testFolderFiles:', testFolderFiles);

// Operative System module = OS
// console.log('Platform: ', os.platform());
// console.log('Architecture', os.arch());
// console.log('CPU cores', os.cpus());

// Third party module example
const student = {
	id: uuid.v4(), //UUID
	name: 'Filip',
	age: 20,
};

// console.log(student);
