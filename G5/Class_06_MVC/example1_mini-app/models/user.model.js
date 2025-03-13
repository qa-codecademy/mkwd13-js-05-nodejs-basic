import { readFile, writeFile } from '../services/files.service.js';

// The model is the one responsible for the business logic. It is the only one that is allowed to talk to the database
// The model is using the file helper service for easier communication with the database
// The model is unaware of any requests and responses and is only concerned about data

const User = {
	async getAllUsers() {
		const users = await readFile('users.json'); // we get the users from the DB

		return users; // and give them back to whomever asked about them (in our case the user controller)
	},

	async getUserById(id) {
		const users = await readFile('users.json'); // we get the users from the DB

		const user = users.find(user => user.id === parseInt(id)); // we search for the one we need by comparing the IDs

		return user; // and we give it back to whomever asked about it (in our case the user controller)
	},

	async createUser(body) {
		const users = await readFile('users.json'); // we get the users from the DB
		const newUser = {
			// we create a new user object with the data from the body + id and created date
			// name: body.name,
			// email: body.email,
			...body,
			id: users.length + 1,
			createdAt: new Date().toISOString(),
		};

		users.push(newUser); // we add the newly created user to the users array

		await writeFile('users.json', users); // save the array in the database

		return newUser; // and return back the newly created user to whomever wanted to create it (in our case the controller)
	},
};

export default User;
