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

	if (url === '/' || url === '/home') {
		res.writeHead(200);
		res.end(
			JSON.stringify({
				message: 'Welcome to our books API!',
			})
		);
	} else if (url === '/books') {
		res.writeHead(200);
		res.end(JSON.stringify(books));
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
