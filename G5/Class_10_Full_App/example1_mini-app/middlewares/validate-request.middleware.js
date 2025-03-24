const validateRequest = schema => async (req, res, next) => {
	try {
		await schema.parseAsync(req.body);
		next();
	} catch (error) {
		// Bad Request Exception
		res.status(400).send({
			errors: error.errors,
		});
	}
};

export default validateRequest;
