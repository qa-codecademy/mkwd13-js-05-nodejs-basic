import http from 'http';

// request > req
// response > res

const PORT = 3000; // default PORT for servers
const HOSTNAME = 'localhost'; // physical IP for every PC 126.0.0.1 // 86.123.123.01

const server = http.createServer((request, response) => {
	// console.log('Request', request);
	// console.log('Response', response);

	console.log(
		`Server has been called on: ${request.method} http://${HOSTNAME}:${PORT}${request.url}`
	);

	if (request.url === '/users') {
		response.writeHead(200);
		response.end('Here are the users for you...');
	} else if (request.url === '/students') {
		response.writeHead(200);
		response.end('Here are the students for you...');
	} else if (request.url === '/') {
		response.writeHead(200);
		response.end('Welcome to the Homepage!');
	} else {
		response.writeHead(404);
		response.end('Not found');
	}

	// We can send back textual responses
	// response.writeHead(200, { // writeHead method is used to send status and add headers
	// 	'Content-Type': 'text/plain',
	// });
	// response.end('Successful request and response'); // end method is used to send the response and to add content
	// We can send back HTML responses
	// response.writeHead(200, { // writeHead method is used to send status and add headers
	// 	'content-type': 'text/html',
	// });
	// response.end(` // end method is used to send the response and to add content
	//   <div>
	//     <h1>Title</h1>
	//     <p>This was amazing</p>
	//   </div>
	//   `);
});

server.listen(PORT, HOSTNAME, () => {
	// Callback is called when server is live
	console.log(`Server started listening at http://${HOSTNAME}:${PORT}`);
});
