# Installing Node.js and NPM

## Windows Installation

1. **Download Node.js**

   - Visit the official Node.js website: <https://nodejs.org>
   - Download the LTS (Long Term Support) version recommended for most users
   - Choose the Windows Installer (.msi) that matches your system (32-bit or 64-bit)

2. **Install Node.js**
   - Run the downloaded .msi installer
   - Follow the installation wizard
   - Accept the license agreement
   - Choose the default installation path (recommended)
   - Click "Next" through the wizard
   - Click "Install" to begin installation
   - Click "Finish" when complete

## macOS Installation

1. **Using Homebrew (Recommended)**

   ```bash
   # Install Homebrew if you haven't already
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

   # Install Node.js
   brew install node
   ```

2. **Direct Download Method**
   - Visit <https://nodejs.org>
   - Download the LTS version for macOS
   - Run the downloaded .pkg installer
   - Follow the installation wizard
   - Enter your administrator password when prompted

## Installing Git Bash (Windows)

Git Bash provides a Unix-like command-line environment on Windows, which can be helpful for following terminal commands that are written for Unix/Linux systems.

1. **Download Git for Windows**

   - Visit the official Git website: <https://git-scm.com/download/win>
   - The download should start automatically
   - If not, click on the appropriate download link for your system (32-bit or 64-bit)

2. **Install Git Bash**

   - Run the downloaded installer
   - Click "Next" to proceed through the installation wizard
   - Accept the license agreement
   - Choose the default installation location (recommended)
   - Select components (default options are recommended, ensure "Git Bash" is selected)
   - Choose the default editor (you can select your preferred text editor)
   - Adjust your PATH environment (recommended: "Git from the command line and also from 3rd-party software")
   - Configure line ending conversions (recommended: "Checkout Windows-style, commit Unix-style line endings")
   - Configure terminal emulator (recommended: "Use MinTTY")
   - Configure extra options (default selections are recommended)
   - Click "Install" to begin installation
   - Click "Finish" when complete

3. **Verify Installation**

   - Search for "Git Bash" in the Start menu and open it
   - Type the following command to verify Git is installed:

   ```bash
    git --version
   ```

- You should see the Git version number displayed

## Verify Installation

After installation, verify that Node.js and NPM are correctly installed by opening a terminal (Command Prompt/PowerShell on Windows, Terminal on macOS) and running:

```bash
# Check Node.js version
node --version

# Check NPM version
npm --version
```

You should see version numbers displayed for both commands. For example:

```bash
v18.17.1  # Node.js version (or newer)
9.6.7     # NPM version (or newer)
```

## Troubleshooting

If you receive a "command not found" error:

1. **Windows:**

   - Restart your computer
   - Ensure Node.js is added to your PATH environment variable
   - Open System Properties > Advanced > Environment Variables
   - Check if Node.js paths are in the System Variables PATH
   - If you encounter PowerShell script execution restrictions, you may need to change the execution policy:

     ```powershell
     # Run PowerShell as Administrator and execute:
     Set-ExecutionPolicy Unrestricted

     # After completing your work, it's recommended to reset to a more secure policy:
     Set-ExecutionPolicy RemoteSigned
     ```

   - This allows scripts to run on your local machine while maintaining security

2. **macOS:**
   - Restart your terminal
   - If using Homebrew, run: `brew doctor`
   - Ensure your PATH includes Node.js: `echo $PATH`

## Next Steps

Once Node.js and NPM are successfully installed, you can start creating and running JavaScript applications locally on your machine.

## Creating Your First NPM Project

1. **Create a New Project Directory**

   ```bash
   mkdir my-first-project
   cd my-first-project
   ```

2. **Initialize NPM Project**

   ```bash
   npm init -y
   ```

   This creates a `package.json` file with default settings. The `-y` flag accepts all defaults automatically.

3. **Create Your First JavaScript File**

   ```bash
   touch index.js
   # Example: Add console.log("Hello, Node.js!")
   ```

4. **Run Your Project**

   ```bash
   node index.js
   ```

   You should see "Hello, Node.js!" printed in your terminal.

The generated `package.json` will look similar to this:

```json
{
	"name": "my-first-project",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1"
	},
	"keywords": [],
	"author": "",
	"license": "ISC"
}
```

## Working with JavaScript Modules

1. **Create Module File**

   Create a new file called `mathUtils.js`:

   ```javascript
   // mathUtils.js
   export function add(a, b) {
   	return a + b;
   }
   ```

2. **Use Module in Main File**

   Update your `index.js` to import and use the function:

   ```javascript
   // index.js
   import { add } from './mathUtils.js';

   console.log(add(5, 3)); // Outputs: 8
   ```

3. **Enable ES Modules**

   To use ES modules, update your `package.json` by adding:

   ```json
   {
   	"type": "module"
   }
   ```

   Your complete `package.json` should look like:

   ```json
   {
   	"name": "my-first-project",
   	"version": "1.0.0",
   	"description": "",
   	"main": "index.js",
   	"type": "module",
   	"scripts": {
   		"test": "echo \"Error: no test specified\" && exit 1"
   	},
   	"keywords": [],
   	"author": "",
   	"license": "ISC"
   }
   ```

4. **Run the Project**

   ```bash
   node index.js
   ```

## Basic Terminal Commands for Beginners

Here are essential terminal commands you'll frequently use while working with Node.js projects:

1. **Navigation Commands**

   ```bash
   pwd                 # Print Working Directory - shows your current location
   ls                  # List files and folders in current directory
   cd directory_name   # Change Directory - move into a folder
   cd ..              # Move up one directory level
   cd ~               # Go to home directory
   ```

2. **File and Directory Management**

   ```bash
   mkdir folder_name   # Create a new directory
   touch file.txt     # Create a new empty file
   rm file.txt        # Remove/delete a file
   rm -r folder_name  # Remove a directory and its contents
   cp file1 file2     # Copy file1 to file2
   mv file1 file2     # Move or rename files
   ```

3. **Viewing and Editing Files**

   ```bash
   cat file.txt       # Display file contents
   less file.txt      # View file contents page by page
   nano file.txt      # Open file in nano text editor
   code file.txt      # Open file in VS Code (if installed)
   ```

4. **System Commands**

   ```bash
   clear             # Clear terminal screen
   history           # Show command history
   ctrl + c          # Stop running process
   ctrl + l          # Clear screen
   ```

5. **NPM Specific Commands**

   ```bash
   npm install       # Install all dependencies from package.json
   npm install pkg   # Install a specific package
   npm run script    # Run a script defined in package.json
   npm list          # List installed packages
   ```

These commands form the foundation of working with the terminal. Understanding them will make you more efficient when developing Node.js applications. You don't need to learn all commands by heart, but it's good to know that they exist and what they do. You will learn more about them as we go along.
