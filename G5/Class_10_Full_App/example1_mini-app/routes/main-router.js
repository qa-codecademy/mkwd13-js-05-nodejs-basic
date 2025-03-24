import { Router } from 'express';
import customerRouter from './customer.routes.js';

const router = Router();

// all routes start with /api

router.use('/customers', customerRouter);

export default router;
