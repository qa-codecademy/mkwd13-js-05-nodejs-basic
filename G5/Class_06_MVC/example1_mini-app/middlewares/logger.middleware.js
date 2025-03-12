import { appendFile } from '../services/files.service.js';

export default function logger(req, res, next) {
	const timestamp = new Date().toISOString();

	const log = `${timestamp} ${req.method} ${req.url}\n`;

	appendFile('calls.log', log);

	next();
}
