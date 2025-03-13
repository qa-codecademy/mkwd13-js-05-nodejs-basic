import User from '../models/user.model.js';

// The user controller is the ONLY component in the execution flow that is responsible for:
// 1. Receiving the request (from the client)
// 2. Sending the response (back to the client)

// The controller gets called by the router, and he gets info from the Model. Based on this info, he decides how to provide a response back to the client

const UserController = {
	async getAllUsers(req, res) {
		const users = await User.getAllUsers(); // get data from model

		res.send(users); // send back response to client
	},
	async getUserById(req, res) {
		// const id = req.params.id - same as the destructuring bellow
		const {
			params: { id }, // we get the id from the request
		} = req;

		const user = await User.getUserById(id); // we pass the id to the model who finds the user and gives it to us

		if (!user) {
			// when the model tells us there is no user found we tell that to the client
			res.status(404).send({
				error: 'User not found.',
			});
		}

		// when we got a user from the model, we give it back to the client
		res.send(user);
	},
	async createUser(req, res) {
		// const body = req.body
		const { body } = req; // we get the body from the request

		const user = await User.createUser(body); // and pass it to the model so that it can create the user for us, and give it back with id and created date

		res.status(201).send(user); // and we give it back to the client
	},
};

export default UserController;
