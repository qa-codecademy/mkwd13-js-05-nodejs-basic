import { z } from 'zod';

export const customerSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	phone: z.string().optional(),
	age: z.number().min(18),
	location: z.string().optional(),
});
