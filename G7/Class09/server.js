import express from "express";
import { mongo_connection } from "./mongo-connection.js";
import { productMongoModel } from "./schemas/product.schema.js";

const server = express();

// GET ALL PRODUCTS
server.get("/products", async (req, res) => {
   const products = await productMongoModel.find();

   res.send(products)
});

server.listen(3001, "localhost", async () => {
    console.log('Server is up and running');
    await mongo_connection()
});