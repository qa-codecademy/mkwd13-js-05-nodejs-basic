import express from 'express';
import userRouter from './routes/user.routes.js';
import logger from './middlewares/logger.middleware.js';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url)); // fix for directory location (__dirname) when using "type": "module" (ES Modules)

// Defining consts
const PORT = 3000;
const HOSTNAME = 'localhost';

// Initializing the server
const app = express();

// Middleware
app.use(express.json()); // parsing the request body automatically
app.use(express.static(join(__dirname, 'public'))); // we specify where do we provide the client app at. Public is the default folder for front end (client) apps
app.use(logger); // we use the logger middleware for every request that comes in our API

// API Routes - All BE endpoints (routes) need to start with /api
app.use('/api/users', userRouter); // here we delegate the work to the userRouter
// when we had more routes we can list them here like:
// app.use('api/products', productRouter) etc.

// Starting the server
app.listen(PORT, HOSTNAME, () => {
	console.log(`Server started listening on: http://${HOSTNAME}:${PORT}`);
});
