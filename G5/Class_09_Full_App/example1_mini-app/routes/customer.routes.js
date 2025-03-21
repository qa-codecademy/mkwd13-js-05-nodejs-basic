import { Router } from 'express';
import CustomerController from '../controllers/customer.controller.js';

const router = Router();
// /api/customers

// Get all customers
router.get('', CustomerController.getAllCustomers);

// Get a single customer

// Create a new customer

// Update a customer

// Delete a customer

export default router;
