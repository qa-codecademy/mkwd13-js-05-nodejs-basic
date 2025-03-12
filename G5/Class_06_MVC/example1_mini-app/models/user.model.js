import { readFile, writeFile } from '../services/files.service.js';

const User = {
	async getAllUsers() {
		const users = await readFile('users.json');

		return users;
	},

	async getUserById(id) {
		const users = await readFile('users.json');

		const user = users.find(user => user.id === parseInt(id));

		return user;
	},

	async createUser(body) {
		const users = await readFile('users.json');
		const newUser = {
			// name: body.name,
			// email: body.email,
			...body,
			id: users.length + 1,
			createdAt: new Date().toISOString(),
		};

		users.push(newUser);

		await writeFile('users.json', users);

		return newUser;
	},
};

export default User;
