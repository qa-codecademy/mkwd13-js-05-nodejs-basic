# Express.js Web Application Guide

Express.js is a fast, unopinionated, minimalist web framework for Node.js that helps you build web applications and APIs quickly and easily.

## Installation

```bash
npm init -y # Initialize a new Node.js project
npm install express # Install Express.js
```

## Basic Usage

```javascript
const express = require('express');
const app = express();
const port = 3000;

// Basic route
app.get('/', (req, res) => {
	res.send('Hello World!');
});

// Start server
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
```

## Key Features

1. **Routing**

   - Handle HTTP methods (GET, POST, PUT, DELETE)
   - Support for URL parameters and query strings
   - Route middleware

2. **Middleware**

   - Built-in middleware (express.json(), express.static())
   - Third-party middleware support
   - Custom middleware creation

3. **Static Files**

   ```javascript
   app.use(express.static('public'));
   ```

4. **Template Engines**
   ```javascript
   app.set('view engine', 'ejs'); // Example using EJS
   ```

## Common Express.js Middleware

```javascript
// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS Middleware
app.use(cors());

// Static Files
app.use(express.static('public'));
```

## Additional Resources

- [Express.js Official Documentation](https://expressjs.com/)
- [Express.js GitHub Repository](https://github.com/expressjs/express)
- [Express.js Security Best Practices](https://expressjs.com/en/advanced/best-practice-security.html)
