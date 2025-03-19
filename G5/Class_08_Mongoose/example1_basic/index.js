import express from 'express';
import mongoose from 'mongoose';
import Customer from './models/customer.model.js';

const PORT = 3000;
const HOSTNAME = 'localhost';
const MONGO_USERNAME = 'ivokostovski';
const MONGO_PASSWORD = 'V1qwGccfdoAu3y8X';
const MONGO_CLUSTER = 'cluster0.3y9yiup';
const MONGO_DB_NAME = 'repair-shop';

const URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

const app = express();

mongoose.connect(URI).catch(error => {
	console.error(error);
});

// Middleware
app.use(express.json());

// Endpoints
app.get('/api/customers', (req, res) => {
	// TODO: Get customers from the DB
	res.send([]);
});

app.post('/api/customers', async (req, res) => {
	const body = req.body;
	// TODO: Create a new custom in the DB
	const customer = new Customer({
		name: body.name,
		email: body.email,
		location: body.location,
		age: body.age,
		phone: body.phone,
	});

	const createdCustomer = await customer.save();

	// Return the created customer
	res.send(createdCustomer);
});

app.listen(PORT, HOSTNAME, () => {
	console.log(`Server started listening on http://${HOSTNAME}:${PORT}`);
});
