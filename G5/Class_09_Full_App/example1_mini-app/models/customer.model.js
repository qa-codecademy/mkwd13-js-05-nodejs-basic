import { Schema, model } from 'mongoose';

const customerSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	phone: {
		type: String,
		// it is not required, it is optional property
	},
	age: {
		type: Number,
		min: 18,
		required: true,
	},
	location: {
		type: String,
		// it is not required, it is optional property
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const Customer = model('customers', customerSchema);

export default Customer;
