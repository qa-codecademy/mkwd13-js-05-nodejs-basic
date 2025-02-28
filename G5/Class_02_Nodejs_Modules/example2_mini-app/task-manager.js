import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Fix __dirname and __filename
const ___filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(___filename);

// Paths
const tasksFile = path.join(__dirname, 'data', 'tasks.json'); // Path to the Database

// Read all tasks from the database

// Get a single task

// Create a new task

// Update a task

// Delete a task
