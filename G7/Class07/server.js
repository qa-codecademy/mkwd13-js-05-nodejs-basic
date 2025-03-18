// External package express
import express from "express";
import todoRouter from "./routes.js";

const server = express();
// the server understand how to parse json request bodys
server.use(express.json());

server.use(todoRouter);

server.listen(3001, "localhost", () => {
    console.log('Server is up and running.')
})