import express from "express"; // External-package
import { retrieveProducts, createProduct } from "./database.service.js"; // named-import
import {v4 as uuid} from "uuid"; // external-package to create IDs

const server = express(); // instance of the express

// This config. will allow our BE to understand and parse JSON request body
server.use(express.json())

const PORT = 3001;
const HOST = "localhost";

// SIMPLE MIDDLEWARE
// IT WILL INTERCEPT ALL OF THE REQUESTS MADE TO THE SERVER
// A MIDDLEWARE HAS ACCESS TO THE REQUEST & RESPONSE OBJECTS AND TO A METHOD next
server.use((request, response, next) => {
    const url = request.url;
    const method = request.method;
    const timeOfRequest = new Date();

    console.log(`Server requested at:${timeOfRequest} on: ${url} method: ${method}`)

    // WILL LET THE REQUEST PROCEED
    // AS SAME AS THE POLICEMAN IN THE BORDER
    next();
});

// USECASE FOR A MIDDLEWARE
/**
 * server.use((request, response, next) => {
    const isAuthenticated = request.token;

    if(isAuthenticated){
         next()
    }
    response.send({error: 'You are not logged in'})
});
 */


/**
 * if(method === "GET" && url === '/'){
 *    this is the default route..
 * }
 */
// http://localhost:3001 (default)
server.get("/", (request, response) => {
    /**
     * request => is the object containing the incoming request info.
     * reponse => is the object that we can use to return something back to the user
     */

    // console.log(request)
    response.send('<p>Server is live.</p>')
});

/**
 * if(method === "GET" && url === "/products"){
 *    ...do something here
 * }
 */
// http://localhost:3001/products
server.get('/products', (request, response) => {
    const products = retrieveProducts()

    response.send(products)
});

// if(method === "POST" && url === "/products")
server.post('/products', (request, response) => {
    // request.body is the property that contains the body send with the request. The body is of type json, that's why we must use server.use(express.json()) so the server understands how to parse JSON request body info.
    const body = request.body;
    console.log(body)

    const product = {
        id: uuid(),
        name: body.name,
        color: body.color,
        size: body.size,
        material: body.material,
        price: body.price
    };


    console.log(product)

    createProduct(product);
    // response.statusCode = 201;
    // response.send({message: `Product created with id: ${product.id}`})

    // same as above but a bit shorter
    response.status(201).send({message: `Product created with id: ${product.id}`})
})

server.listen(PORT, HOST, () => {
    console.log(`Server is up and running on: http://${HOST}:${PORT} 🚀🚀🚀`)
}); 