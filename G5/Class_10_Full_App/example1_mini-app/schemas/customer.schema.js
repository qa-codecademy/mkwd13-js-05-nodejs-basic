import { z } from 'zod';

// We use zod to validate the request body
export const createCustomerSchema = z.object({
	name: z
		.string()
		.min(2, 'Name must be at least 2 characters long')
		.max(50, 'Name cannot exceed 50 characters'),
	email: z.string().email('Invalid email address'),
	phone: z.string().optional(), // TODO add regex to validate phone number
	age: z.number().min(18, 'Customer must be at least 18 years old'),
	location: z.string().optional(),
});

export const updateCustomerSchema = createCustomerSchema.partial();
