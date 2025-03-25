import CustomerService from '../services/customer.service.js';

// With introduction of services, we can now use the service layer to handle the business logic and keep the controller layer clean and simple.
// Now the controller is only responsible for receiving the request, calling the service layer, and sending the response.

const CustomerController = {
	async getAllCustomers(req, res) {
		const customers = await CustomerService.getAllCustomers();

		res.send(customers);
	},

	async getCustomerByEmail(req, res) {
		try {
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
