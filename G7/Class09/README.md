# Class 08: Mongoose

## What is Mongoose?

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

## Why Use Mongoose?

1. Schema-Based Solution

- Mongoose provides a strict schema for MongoDB documents
- Helps maintain consistent data structure
- Allows you to define types, validators, and defaults

2. Type Casting

- Automatically converts incoming data to the correct type
- Example: `age` is automatically converted to a number

3. Validation

- Built-in validation rules for fields
- Example: `email` must be a valid email address

4. Querying

- Provides a rich API for querying and manipulating data
- Example: `User.find({ age: { $gt: 30 } })`

## Installation

To add Mongoose to your Node.js project:

1. Install via npm:

```bash
npm install mongoose
```

2. Connect to MongoDB

```javascript
import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/your_database', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
```

## Basic Usage

1. Define a Schema

```javascript
const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	age: Number,
});
```

2. Create a Model

```javascript
const User = mongoose.model('User', userSchema);
```

3. Create a Document

```javascript
const user = new User({ name: 'John Doe', email: 'john@example.com', age: 30 });
await user.save();
```

## Request Validation with Zod

Zod is a TypeScript-first schema validation library that helps ensure data integrity at the API level.

### Why Use Zod?

1. Type Safety

   - Provides runtime type checking
   - TypeScript integration for excellent developer experience
   - Automatic type inference from schemas

2. Robust Validation

   - Complex validation rules
   - Custom error messages
   - Nested object validation
   - Array validation

3. Developer Experience
   - Clear, chainable API
   - Excellent error messages
   - Reusable validation schemas
   - Easy to test and maintain

### Example Usage

```javascript
import { z } from 'zod';

// Define a schema
const UserSchema = z.object({
	username: z.string().min(3),
	email: z.string().email(),
	age: z.number().min(18),
});

// In your route handler / controller method
app.post('/users', (req, res) => {
	const result = UserSchema.safeParse(req.body);

	if (!result.success) {
		return res.status(400).json({
			errors: result.error.issues,
		});
	}

	// req.body is now validated and typed
	const validatedData = result.data;
});
```
