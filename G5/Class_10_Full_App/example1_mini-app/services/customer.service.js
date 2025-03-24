import Customer from '../models/customer.model.js';

const CustomerService = {
	async getAllCustomers() {
		const customers = await Customer.find();

		return customers;
	},

	async getCustomerByEmail(email) {
		const customer = await Customer.findOne({
			email,
		});

		if (!customer) {
			throw new Error('Customer not found');
		}

		return customer;
	},

	async createCustomer(body) {
		const { name, age, location, email, phone } = body;

		const customer = new Customer({
			name,
			age,
			location,
			email,
			phone,
		});

		const createdCustomer = await customer.save();

		return createdCustomer;
	},

	async updateCustomer(id, body) {
		const customer = await Customer.findByIdAndUpdate(id, body, {
			new: true, // returns the updated version of the customer
			runValidators: true,
		});

		return customer;
	},
};

export default CustomerService;
