import mongoose from "mongoose"; // external package

const NEW_URL = "mongodb+srv://gjorge:qwert_123@cluster0.x196b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

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