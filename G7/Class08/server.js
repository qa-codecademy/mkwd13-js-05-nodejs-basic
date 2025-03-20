import express from "express";
import { mongoConnection } from "./database/mongo-connection.js"
const server = express();

// req => request
// res => response
server.get('/', (req, res) => {
    res.send('server is live.')
});

server.listen(3001, "localhost", async () => {
    console.log('Server is up and running');
    await mongoConnection()
});