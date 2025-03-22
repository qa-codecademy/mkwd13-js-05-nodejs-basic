import { Schema, model } from 'mongoose';

// first we define the schema
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

// then we create the model
const Customer = model('customers', customerSchema);

// then we export the model
export default Customer;
