// Importing built-in Node.js modules
import path from "path"; // Handles file and directory paths
import fs from "fs"; // Provides file system operations (read/write files, directories, etc.)
import os from "os"; // Retrieves operating system information
import querystring from "querystring"; // Retrieves data from api query parameters
import { fileURLToPath } from "url";

// Importing NPM packages
import { v4 as uuidv4 } from "uuid";

const absoluteFilePath =
  "D:SEDCSEDC13\\04.NodeJSBasicmkwd13-js-05-nodejs-basicG1Class02-built_in_modulescode\filesystemindex.js";
// Get  __filename and __dirname equivalents for ES modules
const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
console.log(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);
