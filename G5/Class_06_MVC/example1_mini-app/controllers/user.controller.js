import User from '../models/user.model.js';

const UserController = {
	getAllUsers(req, res) {
		res.send('request to route users was invoked');
	},
	getUserById(req, res) {
		// const id = req.params.id
		const {
			params: { id },
		} = req;

		const user = User.getUserById(id);

		res.send(user);
	},
};

export default UserController;
