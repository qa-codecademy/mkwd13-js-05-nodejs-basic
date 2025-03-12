import User from '../models/user.model.js';

const UserController = {
	async getAllUsers(req, res) {
		const users = await User.getAllUsers();

		res.send(users);
	},
	async getUserById(req, res) {
		// const id = req.params.id
		const {
			params: { id },
		} = req;

		const user = await User.getUserById(id);

		if (!user) {
			res.status(404).send({
				error: 'User not found.',
			});
		}

		res.send(user);
	},
	async createUser(req, res) {
		// const body = req.body
		const { body } = req;

		const user = await User.createUser(body);

		res.status(201).send(user);
	},
};

export default UserController;
