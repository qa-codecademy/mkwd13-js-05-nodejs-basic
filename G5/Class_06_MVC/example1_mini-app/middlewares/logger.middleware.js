import { appendFile } from '../services/files.service.js';

// Middleware are the methods that are executed between the request and response while the request is active
// This middleware is used to keep logs of all calls to our APIs for easier debugging

export default function logger(req, res, next) {
	// next is the third parameter that we get automatically by node / express and is used by the middleware
	const timestamp = new Date().toISOString();

	const log = `${timestamp} ${req.method} ${req.url}\n`; // this is the log that we will save

	appendFile('calls.log', log); // we save the log to the log file

	next(); // and by calling next, we continue with execution (we go to either next middleware or some route, that is the concern of the express app, not to this middleware)
}
