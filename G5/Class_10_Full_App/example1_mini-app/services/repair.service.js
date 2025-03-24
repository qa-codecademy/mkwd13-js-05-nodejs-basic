import Repair from '../models/repair.model.js';

const RepairService = {
	async getRepairs() {
		const repairs = await Repair.find();

		return repairs;
	},

	async createRepair(body) {
		const { customerId, carModel, carLicensePlate, problem, estimatedCost } =
			body;

		const repair = new Repair({
			customer: customerId,
			carModel,
			carLicensePlate,
			problem,
			estimatedCost,
		});

		const createdRepair = await repair.save();

		return createdRepair;
	},
};

export default RepairService;
