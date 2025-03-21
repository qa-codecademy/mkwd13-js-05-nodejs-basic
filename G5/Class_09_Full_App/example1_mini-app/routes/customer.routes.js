import { Router } from 'express';
import CustomerController from '../controllers/customer.controller.js';
import validateRequest from '../middlewares/validate-request.middleware.js';
import {
	createCustomerSchema,
	updateCustomerSchema,
} from '../schemas/customer.schema.js';

const router = Router();
// /api/customers

// Get all customers
router.get('', CustomerController.getAllCustomers);

// Get a single customer
router.get('/:email', CustomerController.getCustomerByEmail);

// Create a new customer
router.post(
	'',
	validateRequest(createCustomerSchema),
	CustomerController.createCustomer
);

// Update a customer
router.put(
	'/:id',
	validateRequest(updateCustomerSchema),
	CustomerController.updateCustomer
);

// Delete a customer

export default router;
