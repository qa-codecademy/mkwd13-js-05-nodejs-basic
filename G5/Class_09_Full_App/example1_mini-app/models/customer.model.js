import { Schema, model } from 'mongoose';

const customerSchema = new Schema({
	name: {
		type: String,
		require: true,
	},
	email: {
		type: String,
		require: true,
		unique: true,
	},
	phone: {
		type: String,
		// it is not required, it is optional property
	},
	age: {
		type: Number,
		min: 18,
		require: true,
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
