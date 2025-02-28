# Filesystem Homework

## Requirements #1: File Operations

Create a simple Node.js application that demonstrates file system operations:

1. Initialize a new npm project and create an `index.js` file.
2. Using the fs module, create a new file called `homework.txt`.
3. Write the following text to the file: "Homework 02 in Basic Node".
4. Append the following text to the file: "FINISHED!".
5. Read the file contents and print them to the console.

**Note**: You can use ES modules syntax for importing and exporting.

## Requirements #2: Todo Application

Build a todo management application with the following components:

1. Create a new project folder (separate from Requirement #1).
2. Initialize a new npm project and create an `index.js` file.
3. Create a `todos.js` file containing:
   - A list of dummy todos
   - Each todo should have:
     - `id` (string)
     - `isDone` (boolean)
     - `title` (string)
4. Export the todo array from `todos.js` and import it in `index.js`.
5. Create a `print-todos.js` file with a function that:
   - Iterates through the todo list
   - Prints each todo's title
6. Export the function from `print-todos.js` and import it in `index.js`.
7. Install the **chalk** package.
8. Enhance the output formatting:
   - Completed todos (where `isDone` is `true`) should be printed in **green**
   - Incomplete todos should be printed in **red**

