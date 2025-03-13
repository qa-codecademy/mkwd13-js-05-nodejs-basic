import express from 'express';
import userRouter from './routes/user.routes.js';
import logger from './middlewares/logger.middleware.js';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Defining consts
const PORT = 3000;
const HOSTNAME = 'localhost';

// Initializing the server
const app = express();

// Middleware
app.use(express.json());
app.use(express.static(join(__dirname, 'public')));
app.use(logger);

// API Routes
app.use('/api/users', userRouter);

// Starting the server
app.listen(PORT, HOSTNAME, () => {
	console.log(`Server started listening on: http://${HOSTNAME}:${PORT}`);
});
