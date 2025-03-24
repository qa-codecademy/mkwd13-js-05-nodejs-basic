import { Router } from 'express';
import RepairController from '../controllers/repair.controller.js';
import validateRequest from '../middlewares/validate-request.middleware.js';
import { createRepairSchema } from '../schemas/repair.schema.js';

const router = Router();

router.get('', RepairController.getRepairs);
router.get('/:id', RepairController.getRepairById);
router.post(
	'',
	validateRequest(createRepairSchema),
	RepairController.createRepair
);

export default router;
