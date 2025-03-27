import mongoose from "mongoose"; // external package
import dotenv from "dotenv";

dotenv.config();

// READING ENV VARIABLES
console.log(process.env.FIRSTNAME)
const NEW_URL = process.env.CONNECTION_URL

export const mongo_connection = async() => {
    try {
        // connect to mongo
       await mongoose.connect(NEW_URL, {
            dbName:"products-database"
        });
        console.log('Connection with mongo success.')
    } catch (error) {
        // if there is error
        throw new Error('Connection to mongo database failed.')
    }
}