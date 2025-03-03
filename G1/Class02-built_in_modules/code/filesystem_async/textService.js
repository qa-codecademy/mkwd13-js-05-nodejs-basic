import * as fs from "fs";
import { promisify } from "util";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const FILE_PATH = `${__dirname}/example.txt`;

// Convert callback-based functions into promise-based
const writeFile = promisify(fs.writeFile);
const appendFile = promisify(fs.appendFile);
const readFile = promisify(fs.readFile);

const writeFileAsync = async (filePath, content) => {
  try {
    await writeFile(filePath, content, "utf8");
    console.log(`File written successfully ${filePath}`);
  } catch (error) {
    console.error(`Error writing file: ${error.message}`);
  }
};

const appendFileAsync = async (filePath, content) => {
  try {
    await appendFile(filePath, `\n${content}`, "utf8");
    console.log(`Content appended to file successfully ${filePath}`);
  } catch (error) {
    console.error(`Error appending file: ${error.message}`);
  }
};

const readFileAsync = async (filePath) => {
  try {
    const data = await readFile(filePath, "utf8");
    console.log(`Content read successfully from ${filePath}. Data: ${data}`);
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
  }
};

// await writeFileAsync(FILE_PATH, "Hello, this is the first line");
// await appendFileAsync(FILE_PATH, "This is an appended text");
await readFileAsync(FILE_PATH);
