import Repair from '../models/repair.model.js';

const RepairService = {
	async getRepairs(query) {
		const { carModel, carLicensePlate, minCost, maxCost } = query;
		let filterQuery = {};

		if (carModel) {
			filterQuery = {
				...filterQuery,
				carModel,
			};
		}

		if (carLicensePlate) {
			filterQuery = {
				...filterQuery,
				carLicensePlate,
			};
		}

		if (minCost || maxCost) {
			let estimatedCost = {};
			if (minCost) {
				estimatedCost = {
					...estimatedCost,
					$gte: minCost,
				};
			}

			if (maxCost) {
				estimatedCost = {
					...estimatedCost,
					$lte: maxCost,
				};
			}

			filterQuery = {
				...filterQuery,
				estimatedCost,
			};
		}

		const repairs = await Repair.find(filterQuery);

		return repairs;
	},

	async createRepair(body) {
		const { customerId, carModel, carLicensePlate, problem, estimatedCost } =
			body;

		const customerRepairs = await Repair.find({
			customer: customerId,
		});

		const previousRepairsCount = customerRepairs.length;

		let discount = 0;

		if (previousRepairsCount >= 3 && previousRepairsCount <= 5) {
			discount = 0.05; // 5%
		} else if (previousRepairsCount > 5) {
			discount = 0.1; // 10%
		}

		const originalCost = estimatedCost;
		const discountedCost = originalCost * (1 - discount);

		const repair = new Repair({
			customer: customerId,
			carModel,
			carLicensePlate,
			problem,
			estimatedCost,
			estimatedCost: discountedCost,
			originalCost,
			discount,
		});

		const createdRepair = await repair.save();

		return createdRepair;
	},
};

export default RepairService;
