import express from "express";
import { mongo_connection } from "./mongo-connection.js";
import productRouter from "./routes/products.router.js";
import orderRouter from "./routes/order.router.js";
import authRouter from "./routes/auth.router.js";

const server = express();
server.use(express.json());

server.use(authRouter);
server.use(productRouter);
server.use(orderRouter);
 
server.listen(3001, "localhost", async () => {
    console.log('Server is up and running');
    await mongo_connection()
});