import express from 'express';
import fs from 'fs/promises';

const app = express();

const PORT = 3000;
const HOSTNAME = 'localhost';

app.use(express.json());

// Data file paths
const TASKS_FILE_PATH = './data/tasks.json';

// Routes
// Get all tasks
app.get('/tasks', async (req, res) => {
	const tasks = await fs.readFile(TASKS_FILE_PATH, 'utf-8');

	res.send(JSON.parse(tasks));
});

// Create a new task
app.post('/tasks', async (req, res) => {
	console.log(req.body);

	const tasks = await fs.readFile(TASKS_FILE_PATH, 'utf-8');
	const parsedTasks = JSON.parse(tasks);
	console.log(parsedTasks);

	const newTask = {
		...req.body,
		id: 1,
		completed: false,
		createdAt: new Date().toISOString(),
	};

	parsedTasks.push(newTask);

	await fs.writeFile(TASKS_FILE_PATH, JSON.stringify(parsedTasks, null, 2));

	res.send(newTask);
});

// Update an existing task
app.put('/tasks', (req, res) => {});

// Delete a task
app.delete('/tasks', (req, res) => {});

app.listen(PORT, HOSTNAME, () => {
	console.log(`Server is now listening at: http://${HOSTNAME}:${PORT}`);
});
