import express from "express";
import ProductController from "./controllers/product.controller.js";

// /products => GET ALL PRODUCTS USING MVC

const server = express();

const productController = new ProductController();


server.get('/products', (request, response) => {
    // #1 Request is consumed in the endpoint and coresponding method from the controller is called
    console.log("#1 Request is consumed in the endpoint and coresponding method from the controller is called")
    productController.getProducts(request, response)
});

server.get('/products/:id', (request, response) => {
    productController.getProduct(request, response)
});

server.listen(3001, 'localhost', () => {
    console.log('server is up and running')
})