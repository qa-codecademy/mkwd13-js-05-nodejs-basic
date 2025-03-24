import { Router } from 'express';
import customerRouter from './customer.routes.js';
import repairRouter from './repair.routes.js';

const router = Router();

// all routes start with /api

router.use('/customers', customerRouter);
router.use('/repairs', repairRouter);

export default router;
