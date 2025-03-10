import express from 'express';

const PORT = 3000;
const HOSTNAME = 'localhost';

// This is equivalent to http module startServer method
const app = express();

// This is used in order to provide BODY from POST, PUT & PATCH request in req.body
// Also it automatically parses the body so we get JS object in req.body
app.use(express.json());

// Most basic GET endpoint
app.get('/', (req, res) => {
	res.send('Welcome to my Express.js server!');
});

// GET endpoint with a parameter
// Example for calling this route: http://localhost:3000/hello/john/doe
// Example for calling this route: http://localhost:3000/hello/jane/davidson
// Params MUST be provided in the specified ORDER and with the exact same number of params! All params are REQUIRED!
// The route itself is consisted of:
// - static part: 'hello'
// - dynamic part(s) (params): name & surname
app.get('/hello/:name/:surname', (req, res) => {
	// req.params is always an object with all params as keys and all param values as values
	// example: name is key, john is value, surname is key, doe is value
	console.log(req.params);

	res.send(`Hello ${req.params.name} ${req.params.surname}`);
});

// GET /products?category=sport&size=L
// {
//   category: 'sport',
//   size: 'L'
// }
// Query params
// Query params are received as JS object in the req.query property
// Query params ARE NOT specified in the route, and are ALWAYS OPTIONAL
// The amount of used query params in each call to this route can differ, as all of them are optional
// Example:
// - http://localhost:3000/products?size=M
// - http://localhost:3000/products?size=M&category=sport
// - http://localhost:3000/products
// - http://localhost:3000/products?color=blue
// ...etc.
app.get('/products', (req, res) => {
	console.log(req.query);

	res.send(
		`Searching for products in category ${req.query.category} in size ${req.query.size}`
	);
});

app.get('/products', () => {
	// This route will NEVER be executed as we already have a GET route above this one. Node JS will never match this one, as it will always match the one that comes first (the one above)
	// Routes must be unique in the combination of METHOD + ROUTE_NAME
	// Example GET /products, POST /products PUT /products GET /products/:id etc...
});

app.post('/products', (req, res) => {
	// res.send method automatically stringifies the response body
	res.send({
		message: 'You have created the product:',
		product: {
			...req.body,
			id: Date.now(),
		},
	});
});

app.listen(PORT, HOSTNAME, () => {
	console.log(`Server started listening at http://${HOSTNAME}:${PORT}`);
});

// Example how overloads work
// function printName() {
// 	console.log('Hi name');
// }

// function printName(name) {
// 	console.log(`Hi ${name}`);
// }

// function printName(name, surname) {
// 	console.log(`Hi ${name} ${surname}`);
// }

// function printName(name, surname, prefix) {
// 	console.log(`Hi ${prefix} ${name} ${surname}`);
// }

// printName()
