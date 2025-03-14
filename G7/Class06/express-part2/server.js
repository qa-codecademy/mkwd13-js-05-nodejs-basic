import express from "express"; // External-package
import { retrieveProducts, createProduct, removeById, updateProductById } from "./database.service.js"; // named-import
import { v4 as uuid } from "uuid"; // external-package to create IDs

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

server.get('/products/:id', (request, response) => {
    const params = request.params;
    const id = params.id;

    const products = retrieveProducts()

    const productFound = products.find((product) => product.id === id);

    if(!productFound){
        return response.status(404).send({message: `Product with id: ${id} was not found`});
    }

    // if the product is found we return it back
    response.send(productFound)
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
    response.status(201).send({ message: `Product created with id: ${product.id}` })
});

// Path parametar
// localhost:3001/products/some_id
server.delete('/products/:id', (request, response) => {
    // Way 1
    console.log('body: ', request.body); // DELETE METHOD can have a request body too.

    // Way 2
    const params = request.params;
    console.log('params: ', params);

    try {
        const id = params.id;
        removeById(id);
        response.send({ message: `User with id: #${id} was deleted` });
    } catch (error) {
        // We are catching the error that we thre in removeById function
        //  404 => NOT FOUND 
        // error.message is actually the value we prodided in throw new Error() in the removeById
        response.status(404).send({message: error.message})
    }
});

server.put('/products/:id', (request, response) => {
    const id = request.params.id; // the id of the product that we would like to update
    const newValues = request.body;

    console.log(newValues);
    updateProductById(id, newValues)
    response.send({message: 'Success update'})

})

server.listen(PORT, HOST, () => {
    console.log(`Server is up and running on: http://${HOST}:${PORT} 🚀🚀🚀`)
}); 

