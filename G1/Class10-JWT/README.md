# JSON Web Tokens (JWT) in Express Applications

## What is JWT?

JSON Web Token (JWT) is an open standard for securely transmitting information between parties as a JSON object. JWTs are commonly used for:

- Authentication
- Information Exchange
- Authorization

A JWT token consists of three parts:

1. Header (algorithm & token type)
2. Payload (data)
3. Signature (verification)

## Getting Started

### Installation

Install the required packages:

```bash
npm install jsonwebtoken
```

### Basic Usage in Express

```javascript
import jwt from 'jsonwebtoken';
import express from 'express';
const app = express();

// Secret key (store in .env file in production)
const SECRET_KEY = 'your-secret-key';

// Create a token
app.post('/login', (req, res) => {
	const user = { id: 1, username: 'john_doe' };

	const token = jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });
	res.json({ token });
});

// Verify token middleware
const verifyToken = (req, res, next) => {
	const token = req.headers['authorization'];

	if (!token) {
		return res.status(403).json({ message: 'No token provided' });
	}

	try {
		const decoded = jwt.verify(token, SECRET_KEY);
		req.user = decoded;
		next();
	} catch (err) {
		return res.status(401).json({ message: 'Invalid token' });
	}
};

// Protected route example
app.get('/protected', verifyToken, (req, res) => {
	res.json({ message: 'Protected data', user: req.user });
});
```

## Token Structure

A typical JWT token looks like this:

```text
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJqb2huX2RvZSIsImlhdCI6MTYxNjE1MTYzMX0.gQxqyVHKZJVNw5z-cxs4LzqOHxv-fxNbD8Zr5rYwKGc
```

## Testing and Debugging Tokens

### Online Tools

1. [JWT.io](https://jwt.io/) - Decode and verify JWTs
2. [JSON Web Token Debugger](https://jwt.ms/) - Microsoft's JWT decoder

### Common Token Payload Properties

- `iat`: Issued at (timestamp)
- `exp`: Expiration time
- `sub`: Subject (usually user ID)
- `iss`: Issuer
- `aud`: Audience

## Best Practices

1. Always use HTTPS in production
2. Store tokens securely:
   - Browser: HttpOnly cookies
   - Mobile: Secure storage
3. Keep tokens short-lived
4. Don't store sensitive data in payload
5. Use environment variables for secret keys

## Common Use Cases

1. **User Authentication**

   ```javascript
   // Login route
   app.post('/login', async (req, res) => {
   	const { username, password } = req.body;
   	// Verify credentials
   	if (validCredentials) {
   		const token = jwt.sign({ userId: user.id }, SECRET_KEY, {
   			expiresIn: '1h',
   		});
   		res.json({ token });
   	}
   });
   ```

2. **API Authorization**

```javascript
// Protect API routes
app.get('/api/data', verifyToken, (req, res) => {
	// Only accessible with valid token
	res.json({ data: 'Protected content' });
});
```

## Security Considerations

1. Use refresh tokens for long-term sessions
2. Set appropriate token expiration times
3. Use strong secret keys

## Additional Resources

- [JWT Official Documentation](https://jwt.io/introduction)
- [Node.js jsonwebtoken package](https://github.com/auth0/node-jsonwebtoken)