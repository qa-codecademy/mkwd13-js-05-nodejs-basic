# Basic instructions

1. Open the wanted folder in VS Code
2. Create the new folder for the new project
3. Click on new folder icon and add name OR open terminal and use `mkdir <NAME_OF_FOLDER>
4. One of these ways:
   - (If using terminal) enter the folder you just created by using `cd <NAME_OF_FOLDER>`
   - Right click on folder > Open in integrated terminal
5. Execute the following in terminal `npm init -y`
6. Open package.json and add `"type": "module"`
7. Create `index.js` file in the same folder:
   - Right click on folder and `Create new file`
   - In terminal `touch index.js`
8. Install the following modules:
   - `npm i -D nodemon`
   - `npm i uuid`
9. Add following scripts in `package.json`:
   - "start": "node index.js",
   - "dev": "nodemon index.js --ignore \*_/_.json"
10. Run:
    - `npm run start` to run server once
    - `npm run dev` to start server in watch mode
11. Celebrate 🎉
