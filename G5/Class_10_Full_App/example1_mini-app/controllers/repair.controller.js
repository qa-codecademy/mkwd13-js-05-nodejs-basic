import RepairService from '../services/repair.service.js';

// With introduction of services, we can now use the service layer to handle the business logic and keep the controller layer clean and simple.
// Now the controller is only responsible for receiving the request, calling the service layer, and sending the response.

const RepairController = {
	async getRepairs(req, res) {
		try {
			const repairs = await RepairService.getRepairs(req.query);

			res.send(repairs);
		} catch (error) {
			res.status(500).send({
				errors: [error.message],
			});
		}
	},

	async getRepairById(req, res) {
		try {
			const repairDetails = await RepairService.getRepairById(req.params.id);

			res.send(repairDetails);
		} catch (error) {
			res.status(500).send({
				errors: [error.message],
			});
		}
	},

	async createRepair(req, res) {
		try {
			const repair = await RepairService.createRepair(req.body);

			res.status(201).send(repair);
		} catch (error) {
			res.status(500).send({
				errors: [error.message],
			});
		}
	},
};

export default RepairController;
