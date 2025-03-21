import Customer from '../models/customer.model.js';

const CustomerController = {
	async getAllCustomers(req, res) {
		const customers = await Customer.find();

		res.send(customers);
	},
};

export default CustomerController;
