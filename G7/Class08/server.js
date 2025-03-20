import express from "express";
import { mongoConnection } from "./database/mongo-connection.js"
import productRouter from "./routes/products.router.js";

const server = express();

server.use(express.json()); // server knows how to read/parse json request body
server.use(productRouter);

// req => request
// res => response
server.get('/', (req, res) => {
    res.send('server is live.')
});

server.listen(3001, "localhost", async () => {
    console.log('Server is up and running');
    await mongoConnection()
});