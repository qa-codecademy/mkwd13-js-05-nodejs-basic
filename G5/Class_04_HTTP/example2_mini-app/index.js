import http from 'http';

const PORT = 3000;
const HOSTNAME = 'localhost';

const books = [
	{ id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien' },
	{ id: 2, title: '1984', author: 'George Orwell' },
	{ id: 3, title: 'Pride and Prejudice', author: 'Jane Austen' },
];

const server = http.createServer((req, res) => {
	res.setHeader('Content-Type', 'application/json');

	const url = req.url;
	const method = req.method;

	console.log(
		`Server has been called with method: ${method} on: http://${HOSTNAME}:${PORT}${url}`
	);

	if (url === '/' || url === '/home') {
		res.writeHead(200);
		res.end(
			JSON.stringify({
				message: 'Welcome to our books API!',
			})
		);
	} else if (url.startsWith('/books')) {
		if (method === 'GET') {
			const id = url.split('/')[2]; // /books/1 => ['', 'book', '1',]

			if (id) {
				// Case 1: Get a single book by ID
				const book = books.find(book => book.id === parseInt(id));
				res.writeHead(200);
				res.end(JSON.stringify(book));
			} else {
				// Case 2: Get all books
				res.writeHead(200);
				res.end(JSON.stringify(books));
			}
		} else if (method === 'POST') {
			// Get the body from the request
			let body = ``;

			req.on('data', chunk => {
				body += chunk.toString();
			});

			req.on('end', () => {
				const parsedBody = JSON.parse(body);
				console.log('parsedBody', parsedBody);

				// Add the new book
				const newBook = {
					...parsedBody,
					id: books.length + 1,
				};
				books.push(newBook);

				// Response
				res.writeHead(201);
				res.end(JSON.stringify(newBook));
			});
		} else {
			res.writeHead(405);
			res.end(
				JSON.stringify({
					error: 'Method not allowed',
				})
			);
		}
	} else {
		// Catch all route / endpoint
		res.writeHead(404);
		res.end(
			JSON.stringify({
				error: 'Not found!',
			})
		);
	}
});

server.listen(PORT, HOSTNAME, () => {
	console.log(`Server started listening at: http://${HOSTNAME}:${PORT}`);
});
