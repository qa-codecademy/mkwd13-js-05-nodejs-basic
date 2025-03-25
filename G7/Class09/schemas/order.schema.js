import mongoose from "mongoose";

const { Schema } = mongoose;

// This is how order object that we gonna store is going to look like
// {
//     items: ['67e306bbd7fac58826b72a17', '67e2edd50baf53c292a778ad']
// }
const orderSchema = new Schema({
    // items that is array of strings ["id"]
    items: [
        {
            type: Schema.Types.ObjectId, // this is the ID value,
            ref: "Product" // each id will REFERENCE to the product
        }
    ]
});

export const orderMongoModel = mongoose.model("Order", orderSchema, "orders")
