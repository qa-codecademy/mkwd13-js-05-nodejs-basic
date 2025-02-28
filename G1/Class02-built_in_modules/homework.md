# Filesystem Homework

## Basic Requirements

1. Initialize a new npm project and create an `index.js` file.
2. Using the fs module create a new file called homework.txt
3. Create a path to the file using the `path` module
4. Inside the file write the following "Homework 02 in Basic Node"
5. Append to the file the following " FINISHED!"
6. Read the file contents and print them out in the console.

- Don't forget to add a .gitignore file in your project as always.

## Bonus (OPTIONAL)

**Use the usersService.js file from class**

1. Create a function called `editUser`. This function will accept two parameters: a number (the id of the user) and user object (name, username and password properties) that will allow you to edit the user you have selected by id.
2. Create a function called `deleteUser`. This function will accept one parameter: a number (the id of the user) and will delete the the user you have selected by id.
3. Create a `deleteAll` function in the usersService that will delete all the users currently in `users.json`
4. Import all those functions into your `index.js` file and call them with the relevant data.
5. Explore all the ways you can use the import syntax and use `import` instead of require.

## Extra Bonus

1. Create a file logs.txt where every user action (add, edit, delete, deleteAll) is recorded. Format: [{timestamp}] Action performed: USER_ADDED (JohnDoe). For this requirement you will have to investigate which method from the fs module is used for appending text to file.

**If you have any issues, you can reach us on our email or you can do it at class, tune in earlier than 5:30 and we'll help you before the class starts**
