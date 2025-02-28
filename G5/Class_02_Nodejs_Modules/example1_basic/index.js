import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Path examples:');
console.log('Current file:', __filename);
console.log('Current directory:', __dirname);
console.log('File extension', path.extname(__filename));
console.log('File name', path.basename(__filename));
console.log('Directory name', path.dirname(__filename)); //__dirname
console.log('Joined path:', path.join(__dirname, 'files', 'test.txt'));

const dirPath = path.join(__dirname, 'test-folder');
console.log('dirPath', dirPath);
if (!fs.existsSync(dirPath)) {
	fs.mkdirSync(dirPath);
}
