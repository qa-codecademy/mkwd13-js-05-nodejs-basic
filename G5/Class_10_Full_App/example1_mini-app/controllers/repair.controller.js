import CustomerService from '../services/customer.service.js';
import RepairService from '../services/repair.service.js';

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
			const repairDetails = await CustomerService.getRepairById(req.params.id);

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
