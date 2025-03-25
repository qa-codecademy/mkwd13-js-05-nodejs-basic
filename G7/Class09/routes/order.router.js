import express from "express";
import { orderMongoModel } from "../schemas/order.schema.js";

const orderRouter = express.Router();

orderRouter.post('/orders', async (req, res) => {
    const body = req.body;
    // ["some_id", "some_second_id"]

    const orderBody = {
        items: body.items
    };

    const order = new orderMongoModel(orderBody);

    await order.save();

    res.status(201).send({message: "Order created"})
});

orderRouter.get('/orders', async (req,res) => {
    const orders = await orderMongoModel.find().populate("items");

    res.send(orders)
});

export default orderRouter;