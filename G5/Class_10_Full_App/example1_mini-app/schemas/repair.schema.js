import { z } from 'zod';

export const createRepairSchema = z.object({
	carModel: z
		.string()
		.min(2, 'Car model must be at least 2 characters')
		.max(100, 'Car model can not be more than 100 characters'),
	carLicensePlate: z
		.string()
		.min(3, 'Car license plate must be at least 3 characters long')
		.max(10, 'Car license plate can not be more than 10 characters long'),
	problem: z
		.string()
		.min(10, 'Problem description must be at least 10 characters long'),
	status: z.enum(['pending', 'in_progress', 'completed']),
	estimatedCost: z.number().positive('Cost must be a positive number'),
});
