# Node.js Modules & Package Management

## Overview

In this class, we explore Node.js built-in modules and learn how to work with external packages using npm (Node Package Manager).

## Built-in Modules

Node.js comes with several built-in modules that provide essential functionality:

- `fs` - File System operations
- `path` - Path manipulation utilities
- `os` - Operating system related utilities

## Package Management with npm

### Installing Packages

To install a package as a project dependency:

```bash
npm install <package-name>
# or shorter syntax
npm i <package-name>
```

### Development Dependencies

For packages only needed during development (like testing tools or development servers):

```bash
npm install --save-dev <package-name>
# or shorter syntax
npm i -D <package-name>
```

### Example Packages Used

1. **UUID** - For generating unique identifiers

   ```bash
   npm install uuid
   ```

2. **Nodemon** - Development tool for auto-restarting Node.js applications
   ```bash
   npm install --save-dev nodemon
   ```

### Package.json

- The `package.json` file tracks your project dependencies
- Created using `npm init` or `npm init -y` for default settings
- Dependencies are listed under:
  - `dependencies`: Production packages
  - `devDependencies`: Development-only packages

## Using Installed Packages

```javascript
// Example using UUID
const { v4: uuidv4 } = require('uuid');
const id = uuidv4(); // Generates a unique ID
```

## Running Scripts with Nodemon

Add this to your package.json:

```json
{
	"scripts": {
		"dev": "nodemon index.js"
	}
}
```

Then run your application with:

```bash
npm run dev
```

## Using .gitignore

The `.gitignore` file is essential for Node.js projects to specify which files and directories should be excluded from version control:

### Common Node.js .gitignore entries

```plaintext
# Dependencies
node_modules/

# Environment variables
.env

# Logs
logs
*.log
npm-debug.log*

# Runtime data
pids
*.pid
*.seed

# IDE specific files
.vscode/
.idea/
*.swp
.DS_Store
```

### Why use .gitignore?

- **Dependencies**: The `node_modules` folder can be very large and should be excluded as it can be recreated using `package.json`
- **Sensitive Data**: Environment files (`.env`) containing secrets should never be committed (we will learn more about this in the near future)
- **Local Files**: IDE configurations and system files are specific to each developer's setup (like theme, fonts, etc.)

To start using .gitignore, create a `.gitignore` file in your project root and add the patterns for files/folders you want to exclude.
