import fs from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// This file is a helper service that is used to improve the readFile, writeFile and appendFile methods, so that we don't have to do manual work all the time, like parse, stringify etc.

const __dirname = dirname(fileURLToPath(import.meta.url)); // Fix for __dirname when using ES modules

const filePath = fileName => join(__dirname, `../data/${fileName}`);

export async function readFile(fileName) {
	// users.json
	const arr = await fs.readFile(filePath(fileName), 'utf-8');
	const parsedArr = JSON.parse(arr);
	return parsedArr;
}

export async function writeFile(fileName, data) {
	const stringifiedData = JSON.stringify(data, null, 2);
	await fs.writeFile(filePath(fileName), stringifiedData);
}

export async function appendFile(filename, log) {
	await fs.appendFile(filePath(filename), log);
}
