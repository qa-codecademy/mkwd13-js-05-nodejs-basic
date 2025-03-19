import express from 'express';
import mongoose from 'mongoose';
import Customer from './models/customer.model.js';
import dotenv from 'dotenv';

dotenv.config();

const {
	MONGO_CLUSTER,
	MONGO_DB_NAME,
	MONGO_PASSWORD,
	MONGO_USERNAME,
	PORT,
	HOSTNAME,
} = process.env;

const app = express();

// Middleware
app.use(express.json());

// Endpoints
app.get('/api/customers', async (req, res) => {
	const customers = await Customer.find();

	res.send(customers);
});

app.post('/api/customers', async (req, res) => {
	try {
		const body = req.body;

		const customer = new Customer({
			name: body.name,
			email: body.email,
			location: body.location,
			age: body.age,
			phone: body.phone,
		});

		const createdCustomer = await customer.save();

		// Return the created customer
		res.status(201).send(createdCustomer);
	} catch (error) {
		res.status(500).send({ message: error.message });
	}
});

async function init() {
	const URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.mongodb.net/${MONGO_DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

	await mongoose.connect(URI);

	app.listen(PORT, HOSTNAME, () => {
		console.log(`Server started listening on http://${HOSTNAME}:${PORT}`);
	});
}

init();
