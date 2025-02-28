import {
	createTask,
	readAllTasks,
	updateTask,
	deleteTask,
} from './task-manager.js';

function main() {
	// createTask('Do homework 2', 'Homework 2, Nodejs Basic');
	// createTask('Do homework 3', 'Homework 3, Nodejs Basic');
	// createTask('Do homework 4', 'Homework 4, Nodejs Basic');
	// createTask('Do homework 5', 'Homework 5, Nodejs Basic');

	// updateTask(
	// 	'324112412',
	// 	'Nov title',
	// 	'Nov description'
	// );

	console.log('All tasks:', readAllTasks());

	deleteTask('b3e1743e-5820-4dd6-92ec-4e07f5e5fd52');

	console.log('All tasks:', readAllTasks());
}

main();

// C - Create
// R - Read
// U - Update
// D - Delete
