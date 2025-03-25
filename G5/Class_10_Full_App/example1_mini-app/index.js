import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/main-router.js';

dotenv.config();

const {
	PORT,
	HOSTNAME,
	MONGO_USERNAME,
	MONGO_PASSWORD,
	MONGO_CLUSTER,
	MONGO_DB_NAME,
} = process.env;

const URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

const app = express();

// Middleware
app.use(express.json());

// Routes
// all routes usually start with /api to differentiate them from the routes used for the frontend
app.use('/api', router);

// Anonymous Self-Invoked-Function or also called IIFE (Immediately Invoked Function Expression)
// This is a function that is defined and executed immediately after it is defined.
// We use this to avoid polluting the global namespace.

(async () => {
	try {
		await mongoose.connect(URI);
	} catch (error) {
		console.error('Error while connecting to Mongo DB', error);
	}

	app.listen(PORT, HOSTNAME, () => {
		console.log(`Server started listening on http://${HOSTNAME}:${PORT}`);
	});
})();
