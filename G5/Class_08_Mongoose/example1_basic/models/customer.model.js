import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
	name: {
		type: String, // 'string',
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	phone: {
		type: String,
	},
	age: {
		type: Number,
		min: 18,
		required: true,
	},
	location: {
		type: String,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const Customer = mongoose.model('customers', customerSchema);

export default Customer;

// _id: ObjectId
// name: string
// email: string
// phone: string +12
// age: number
// location: string
// createdAt: Date
