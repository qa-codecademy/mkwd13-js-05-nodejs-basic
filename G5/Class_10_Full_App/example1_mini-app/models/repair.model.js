import { Schema, model } from 'mongoose';

const repairSchema = new Schema(
	{
		customer: {
			type: Schema.Types.ObjectId,
			ref: 'customers',
			required: true,
		},
		carModel: {
			type: String,
			required: true,
		},
		carLicensePlate: {
			type: String,
			required: true,
			unique: true,
		},
		problem: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			enum: ['pending', 'in_progress', 'completed'],
			default: 'pending',
		},
		estimatedCost: {
			type: Number,
			required: true,
		},
		originalCost: {
			type: Number,
			required: true,
		},
		discount: {
			type: Number,
			required: true,
			min: 0,
			max: 1,
		},
	},
	{
		timestamps: true,
	}
);

const Repair = model('repairs', repairSchema);

export default Repair;
