import http from "node:http";

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Hello world!");
  // res.end("<h1>Hello world</h1>");
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
