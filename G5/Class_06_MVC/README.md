# MVC (Model-View-Controller) Pattern

## Overview

MVC is an architectural pattern that separates an application into three main logical components:

- **Model**
- **View**
- **Controller**

Each component is built to handle specific development aspects of an application.

## Components Explanation

### 1. Model

- Handles data logic and business rules
- Interacts with the database
- Manages data, logic, and rules of the application
- Independent of the user interface
- Examples:
  ```javascript
  // User model example
  class User {
  	async findAll() {
  		/* ... */
  	}
  	async findById(id) {
  		/* ... */
  	}
  	async create(data) {
  		/* ... */
  	}
  }
  ```

### 2. View

- Handles data presentation
- Renders the user interface
- Receives data from the controller
- Can be HTML templates, JSON responses, or other output formats
- Example:
  ```html
  <!-- index.html example -->
  <html>
  	<body>
  		<h1>{{title}}</h1>
  		<div id="content">{{content}}</div>
  	</body>
  </html>
  ```

### 3. Controller

- Acts as an interface between Model and View
- Handles user input
- Processes requests and responses
- Example:
  ```javascript
  // User controller example
  const userController = {
  	async getAllUsers(req, res) {
  		try {
  			const users = await User.findAll();
  			res.json(users);
  		} catch (error) {
  			next(error);
  		}
  	},
  };
  ```

## Project Structure

```
project/
├── controllers/     # Request handlers
├── models/         # Data and business logic
├── routes/         # URL routing definitions
├── middleware/     # Application middleware
├── public/         # Static files
└── data/          # Data storage
```

## Implementation Example

```javascript
// index.js
import express from 'express';
import userRouter from './routes/userRoutes.js';

const app = express();

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/api/users', userRouter);

// Error handling
app.use(errorHandler);

app.listen(3000, () => console.log('Server running'));
```

## Benefits

1. **Separation of Concerns**

   - Clear division between data, presentation, and processing logic
   - Easier to maintain and modify individual components

2. **Code Organization**

   - Structured approach to organizing code
   - Better scalability and maintainability

3. **Parallel Development**

   - Different developers can work on models, views, and controllers simultaneously
   - Reduces development time

4. **Loose Coupling**

   - Components are independent of each other
   - Changes in one component don't necessarily affect others

5. **Reusability**
   - Components can be reused across different parts of the application
   - Models can be used with different views

## Best Practices

1. Keep controllers lightweight
2. Business logic belongs in models
3. Use middleware for cross-cutting concerns
4. Implement proper error handling
5. Follow RESTful conventions for APIs
6. Use async/await for asynchronous operations
