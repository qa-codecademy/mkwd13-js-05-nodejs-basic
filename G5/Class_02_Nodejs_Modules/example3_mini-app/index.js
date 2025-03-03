import {
	createTask,
	readAllTasks,
	updateTask,
	deleteTask,
	getTaskById,
} from './task-manager.js';

async function main() {
	// createTask('Do homework 2', 'Homework 2, Nodejs Basic');
	// createTask('Do homework 3', 'Homework 3, Nodejs Basic');
	// createTask('Do homework 4', 'Homework 4, Nodejs Basic');
	// createTask('Do homework 5', 'Homework 5, Nodejs Basic');
	// updateTask('c99ea778-4a15-47d0-9f58-7fb759a28ce2', 'Nov title', 'Nov description');
	// console.log('All tasks:', readAllTasks());
	// deleteTask('b3e1743e-5820-4dd6-92ec-4e07f5e5fd52');
	// const tasks = await readAllTasks();
	// console.log('All tasks:', tasks);
	// const taskThatExists = await getTaskById(
	// 	'22a566bd-9be6-475c-a82f-498ac793e301'
	// );
	// console.log('Exists', taskThatExists);
	// const notFoundTask = await getTaskById(
	// 	'22a566bd-9be6-475c-a82f-498ac793e302'
	// );
	// console.log('Does not exist', notFoundTask);

	// await createTask('Najnov', 'aaaa');

	// const task = await getTaskById('8227c8ac-1c78-4e5b-8ae0-83cf26693c94');
	// console.log(task);

	// await updateTask('8227c8ac-1c78-4e5b-8ae0-83cf26693c94', 'Smeneto', 'bbbbb')

	// const task = await getTaskById('8227c8ac-1c78-4e5b-8ae0-83cf26693c94');
	// console.log(task);

	await deleteTask('8227c8ac-1c78-4e5b-8ae0-83cf26693c94');

	const task = await getTaskById('8227c8ac-1c78-4e5b-8ae0-83cf26693c94');
	console.log(task);
}

main()
	.then(() => {
		console.log('server is now running....');
	})
	.catch(() => {
		console.log('Error while running the server!');
	});

// C - Create
// R - Read
// U - Update
// D - Delete
