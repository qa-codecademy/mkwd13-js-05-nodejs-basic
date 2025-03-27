import { Schema, model } from "mongoose";


const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
});

export const userMongoModel = model(
    "Users",
    userSchema,
    "users"
);