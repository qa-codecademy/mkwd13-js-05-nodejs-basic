import Customer from '../models/customer.model.js';

// With introduction of services, we can now use the service layer to handle the business logic

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
			// we can throw an error to be handled by the controller
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
			runValidators: true, // by default mongoose will not run the validators when updating a document, so we need to set it to true
		});

		return customer;
	},
};

export default CustomerService;
