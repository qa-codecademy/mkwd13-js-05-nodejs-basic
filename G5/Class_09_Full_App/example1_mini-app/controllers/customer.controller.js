import Customer from '../models/customer.model.js';

const CustomerController = {
	async getAllCustomers(req, res) {
		const customers = await Customer.find(); // we use the find method to get all customers from the database using t

		res.send(customers);
	},

	async getCustomerByEmail(req, res) {
		// we use the findOne method to get a single customer from the database using the email for filtering
		const customer = await Customer.findOne({
			email: req.params.email,
		});

		// if the customer is not found, we send a 404 error
		if (!customer) {
			res.status(404).send({
				error: `Customer with email: "${req.params.email}" not found`,
			});
			return;
		}

		// if the customer is found, we send the customer data
		res.send(customer);
	},

	async createCustomer(req, res) {
		try {
			// we destructure the request body to get the name, age, location, email, and phone
			const { name, age, location, email, phone } = req.body;

			// we create a new customer object
			const customer = new Customer({
				name,
				age,
				location,
				email,
				phone,
			});

			// we save the customer to the database
			const createdCustomer = await customer.save();

			// we send a 201 status code and the created customer data
			res.status(201).send(createdCustomer);
		} catch (error) {
			// if there is an error, we send a 500 status code and the error message
			res.status(500).send({
				errors: [error.message],
			});
		}
	},

	async updateCustomer(req, res) {
		try {
			// we destructure the request params to get the id
			const { id } = req.params;
			// we destructure the request body to get the name, age, location, email, and phone
			const { body } = req;

			// we update the customer in the database
			const customer = await Customer.findByIdAndUpdate(id, body, {
				new: true, // returns the updated version of the customer
			});

			// we send the updated customer data
			res.send(customer);
		} catch (error) {
			// if there is an error, we send a 500 status code and the error message
			res.status(500).send({
				errors: [error.message],
			});
		}
	},
};

export default CustomerController;
