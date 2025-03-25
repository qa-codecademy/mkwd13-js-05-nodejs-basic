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

	async getRepairById(id) {
		// we can use the findById method to find a single document by its id
		// we can also use the populate method to populate the customer field (which is a reference to the customer model - a document in the customers collection)
		// populate can receive an array of paths to populate or a single path as a string 'customer' or ['customer'] does the same thing
		const repairDetails = await Repair.findById(id).populate(['customer']);

		return repairDetails;
	},

	async createRepair(body) {
		const { customerId, carModel, carLicensePlate, problem, estimatedCost } =
			body;

		//  We get all the repairs for a single customer
		const customerRepairs = await Repair.find({
			customer: customerId,
		});

		// We get the number of repairs for a single customer
		const previousRepairsCount = customerRepairs.length;

		// We calculate the discount based on the number of repairs for a single customer
		let discount = 0;

		// If the customer has 3 to 5 repairs, they get a 5% discount
		if (previousRepairsCount >= 3 && previousRepairsCount <= 5) {
			discount = 0.05; // 5%
			// If the customer has more than 5 repairs, they get a 10% discount
		} else if (previousRepairsCount > 5) {
			discount = 0.1; // 10%
		}

		const originalCost = estimatedCost; // estimatedCost (sent by the client) is the original cost of the repair
		const discountedCost = originalCost * (1 - discount); // discountedCost is the cost of the repair after the discount

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
