import Customer from '../models/customer.model.js';

const CustomerController = {
	async getAllCustomers(req, res) {
		const customers = await Customer.find();

		res.send(customers);
	},

	async createCustomer(req, res) {
		try {
			const { name, age, location, email, phone } = req.body;

			const customer = new Customer({
				name,
				age,
				location,
				email,
				phone,
			});

			const createdCustomer = await customer.save();

			res.status(201).send(createdCustomer);
		} catch (error) {
			res.status(500).send({
				errors: [error.message],
			});
		}
	},

	async updateCustomer(req, res) {},
};

export default CustomerController;
