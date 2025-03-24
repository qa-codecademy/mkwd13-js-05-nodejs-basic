import { Schema, model } from 'mongoose';

const repairSchema = new Schema(
	{
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
	},
	{
		timestamps: true,
	}
);

const Repair = model('repairs', repairSchema);

export default Repair;
