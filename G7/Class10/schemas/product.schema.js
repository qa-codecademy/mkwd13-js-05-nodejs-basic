import mongoose from "mongoose";

const { Schema } = mongoose

/**
 * This schema represents the structure/shape of the object/document
 * that we are going to store into mongo. 
 * And we must RESPECT the schema, if not, mongo will throw an error.
 */
const productSchema = new Schema({
    // the product object must have the property title, that will be of primitive data type string
    title: {
        type: String,
        required: true // required: true means that the property must exist
    },

    // the product object must have the property description, that will be of primitive data type string
    description: {
        type: String,
        required: true
    },

    // the product object must have property price, that will be of primitive data type number
    price: {
        type: Number,
        required: true
    }
});

export const productMongoModel = mongoose.model(
    "Product", // name of the model
    productSchema,  // schema (represents the shape of the objects)
    "products" // collection name that we would like to iteract with
) 