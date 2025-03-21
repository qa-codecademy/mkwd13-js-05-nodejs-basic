import { customerSchema } from '../schemas/customer.schema.js';

export default async function validateCustomerRequest(req, res, next) {
	try {
		await customerSchema.parseAsync(req.body);
		next();
	} catch (error) {
		// Bad Request Exception
		res.status(400).send({
			errors: error.errors,
		});
	}
}
