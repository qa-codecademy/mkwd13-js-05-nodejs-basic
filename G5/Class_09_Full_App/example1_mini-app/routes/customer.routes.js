import { Router } from 'express';
import CustomerController from '../controllers/customer.controller.js';
import validateCustomerRequest from '../middlewares/validate-customer-req.mid.js';

const router = Router();
// /api/customers

// Get all customers
router.get('', CustomerController.getAllCustomers);

// Get a single customer

// Create a new customer
router.post('', validateCustomerRequest, CustomerController.createCustomer);

// Update a customer
router.put('/:id', validateCustomerRequest, CustomerController.updateCustomer);

// Delete a customer

export default router;
