import express from "express";
import { productMongoModel } from "../schemas/product.schema.js";

const productRouter = express.Router();

// GET ALL PRODUCTS
productRouter.get("/products", async (req, res) => {
    const products = await productMongoModel.find();

    res.send(products)
});

// Create a route that handles: GET PRODUCT BY ID
// NOTE: The method that you should use from productMongoModel is findById()
// GET PRODUCT BY ID
productRouter.get("/products/:id", async (req, res) => {
    const productID = req.params.id;

    const product = await productMongoModel.findById(productID);
    if (!product) {
        return res.status(404).send({ message: `Product with id: ${productID} was not found.` })
    }
    res.send(product)
});


// CREATE PRODUCT
productRouter.post('/products', async (req, res) => {
    const body = req.body;

    const productBody = {
        title: body.title,
        description: body.description,
        price: body.price
    };

    try {
        // Creating a product document that is about to get saved into mongo
        // the values provided must respect the product schema
        const productDocument = new productMongoModel(productBody);
 
        // Going to store the product document(object) into mongo
        await productDocument.save()

        res.status(201).send({message: 'Created'})
    } catch (error) {
        console.error(error)
    }

});

// DELETE PRODUCT
productRouter.delete("/products/:id", async (req, res) => {
    const productID = req.params.id;

    // findByIdAndDelete will delete the product with matching ID, but if it is not found
    // it will return NULL
   const response = await productMongoModel.findByIdAndDelete(productID);
   console.log(response)

   if(!response){
    return res.status(404).send({message: `Product with id: ${productID} was not found.`})
   }

   res.send({message: "Delete success"})
});

// UPDATE PRODUCT
productRouter.put('/products/:id', async (req, res) => {
    const productID = req.params.id;

    const body = req.body;

    const productToUpdate = {
        title: body.title,
        description: body.description,
        price: body.price
    }

    await productMongoModel.findByIdAndUpdate(productID, productToUpdate);


    res.send({message: 'Update success'})
});

export default productRouter;