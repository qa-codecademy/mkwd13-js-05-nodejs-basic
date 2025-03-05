import http from "node:http";
import { URL } from "node:url";

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  console.log(url);
  if (url.pathname === "/greet") {
    const name = url.searchParams.get("name") || "Guest";
    res.writeHead(200, { "content-type": "text/plain" });
    res.end(`Hello ${name}`);
  } else {
    res.writeHead(400, { "content-type": "text/plain" });
    res.end("404 - Not Found");
  }
});

server.listen(3001, () => {
  console.log("Server is running at http://localhost:3001");
});
