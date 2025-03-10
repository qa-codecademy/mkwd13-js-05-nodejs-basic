import express from 'express';

const PORT = 3000;
const HOSTNAME = 'localhost';

const app = express();

app.use(express.json());

// Most basic GET endpoint
app.get('/', (req, res) => {
	res.send('Welcome to my Express.js server!');
});

// GET endpoint with a parameter
app.get('/hello/:name/:surname', (req, res) => {
	console.log(req.params);

	res.send(`Hello ${req.params.name} ${req.params.surname}`);
});

// GET /products?category=sport&size=L

// {
//   category: 'sport',
//   size: 'L'
// }

app.get('/products', (req, res) => {
	console.log(req.query);

	res.send(
		`Searching for products in category ${req.query.category} in size ${req.query.size}`
	);
});

app.get('/products', () => {});

app.post('/products', (req, res) => {
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
