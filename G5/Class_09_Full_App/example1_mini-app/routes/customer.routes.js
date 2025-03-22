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
router.get('', CustomerController.getAllCustomers); // we don't have to pass any middleware to this route, because we don't have a request body

// Get a single customer by email
router.get('/:email', CustomerController.getCustomerByEmail); // we don't have to pass any middleware to this route, because we don't have a request body

// Create a new customer
router.post(
	'',
	validateRequest(createCustomerSchema), // we use validateRequest middleware to validate the request body, we pass the schema to the validate request function that returns a middleware function that is used to validate the request body
	CustomerController.createCustomer
);

// Update a customer
router.put(
	'/:id',
	validateRequest(updateCustomerSchema), // we use validateRequest middleware to validate the request body, we pass the schema to the validate request function that returns a middleware function that is used to validate the request body
	CustomerController.updateCustomer
);

// Delete a customer

export default router;
