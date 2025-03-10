import express from 'express';
import fs from 'fs/promises';

const app = express();

const PORT = 3000;
const HOSTNAME = 'localhost';

// This is used in order to provide BODY from POST, PUT & PATCH request in req.body
// Also it automatically parses the body so we get JS object in req.body
app.use(express.json());

// Data file paths (we can use the path module here for more proper usage)
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
		id: parsedTasks.length + 1,
		completed: false,
		createdAt: new Date().toISOString(),
	};

	parsedTasks.push(newTask);

	await fs.writeFile(TASKS_FILE_PATH, JSON.stringify(parsedTasks, null, 2));

	res.status(201).send(newTask);
});

// Update an existing task
app.put('/tasks/:id', async (req, res) => {
	const { id } = req.params; // Which task do we update
	const { body } = req; // With what do we update

	const tasks = await fs.readFile(TASKS_FILE_PATH, 'utf-8');
	const parsedTasks = JSON.parse(tasks);

	const index = parsedTasks.findIndex(task => task.id === parseInt(id));

	if (index < 0) {
		res.status(404).send({
			error: `Task with id: ${id} not found!`,
		});
	}

	parsedTasks[index] = {
		...parsedTasks[index],
		...body,
	};

	await fs.writeFile(TASKS_FILE_PATH, JSON.stringify(parsedTasks, null, 2));

	res.send(parsedTasks[index]);
});

// Delete a task
app.delete('/tasks/:id', async (req, res) => {
	const { id } = req.params;

	const tasks = await fs.readFile(TASKS_FILE_PATH, 'utf-8');
	const parsedTasks = JSON.parse(tasks);

	const filteredTasks = parsedTasks.filter(task => task.id !== parseInt(id));

	await fs.writeFile(TASKS_FILE_PATH, JSON.stringify(filteredTasks, null, 2));

	res.sendStatus(204);
});

app.listen(PORT, HOSTNAME, () => {
	console.log(`Server is now listening at: http://${HOSTNAME}:${PORT}`);
});
