import Customer from '../models/customer.model.js';

const CustomerController = {
	async getAllCustomers(req, res) {
		const customers = await Customer.find();

		res.send(customers);
	},

	async getCustomerByEmail(req, res) {
		const customer = await Customer.findOne({
			email: req.params.email,
		});

		if (!customer) {
			res.status(404).send({
				error: `Customer with email: "${req.params.email}" not found`,
			});
			return;
		}

		res.send(customer);
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

	async updateCustomer(req, res) {
		const { id } = req.params;
		const { body } = req;

		const customer = await Customer.findByIdAndUpdate(id, body, {
			new: true, // returns the updated version of the customer
		});

		res.send(customer);
	},
};

export default CustomerController;
