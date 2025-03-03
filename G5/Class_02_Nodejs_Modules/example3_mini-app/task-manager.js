import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from 'uuid';

// Fix __dirname and __filename
const ___filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(___filename);

// Paths
const tasksFile = path.join(__dirname, 'data', 'tasks.json'); // Path to the Database

// Read all tasks from the database
export async function readAllTasks() {
	const tasks = await fs.readFile(tasksFile);
	const parsedTasks = JSON.parse(tasks);
	return parsedTasks;
}

// Get a single task
export async function getTaskById(id) {
	const tasks = await readAllTasks();
	const task = tasks.find(task => task.id === id);
	return task;
}

// Create a new task
export async function createTask(title, description) {
	const tasks = await readAllTasks();

	const newTask = {
		id: uuidv4(),
		title,
		description,
		completed: false,
		createdAt: new Date().toISOString(), // 12/12/2025
	};

	tasks.push(newTask);

	await fs.writeFile(tasksFile, JSON.stringify(tasks, null, 2));
}

// Update a task
export async function updateTask(id, title, description) {
	const tasks = await readAllTasks();

	// find the task
	const taskIndex = tasks.findIndex(task => task.id === id);

	if (taskIndex < 0) {
		throw new Error(`Task with ${id} not found.`);
	}

	// update the task
	tasks[taskIndex].title = title;
	tasks[taskIndex].description = description;

	// save it back
	await fs.writeFile(tasksFile, JSON.stringify(tasks, null, 2));
}

// Delete a task
export async function deleteTask(id) {
	// read all tasks
	const tasks = await readAllTasks();

	const filteredTasks = tasks.filter(task => task.id !== id);

	// save all tasks back to DB
	await fs.writeFile(tasksFile, JSON.stringify(filteredTasks, null, 2));
}
