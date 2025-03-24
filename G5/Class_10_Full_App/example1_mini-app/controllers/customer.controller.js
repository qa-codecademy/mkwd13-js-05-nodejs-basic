import CustomerService from '../services/customer.service.js';

const CustomerController = {
	async getAllCustomers(req, res) {
		const customers = await CustomerService.getAllCustomers();

		res.send(customers);
	},

	async getCustomerByEmail(req, res) {
		try {
			// we use the findOne method to get a single customer from the database using the email for filtering
			const customer = await CustomerService.getCustomerByEmail(
				req.params.email
			);

			res.send(customer);
		} catch (error) {
			res.status(404).send({
				error: `Customer with email: "${req.params.email}" not found`,
			});
		}
	},

	async createCustomer(req, res) {
		try {
			const customer = await CustomerService.createCustomer(req.body);

			res.status(201).send(customer);
		} catch (error) {
			// if there is an error, we send a 500 status code and the error message
			res.status(500).send({
				errors: [error.message],
			});
		}
	},

	async updateCustomer(req, res) {
		try {
			const customer = await CustomerService.updateCustomer(
				req.params.id,
				req.body
			);

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
