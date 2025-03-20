import { MongoClient } from "mongodb"


// dimitrovgjorge is <db_username>; Ery3p3wi6Pn2cWjJ is <db_password> HUTtZa32casF789O
const CONNECTION_URL = "mongodb+srv://gjorge:gjorge@cluster0.us6pk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(CONNECTION_URL);

// we are declaring empty variable, later we are going to assign the database instance to it
let dbConnection;

// use this function to connect to the mongo atlas
export const mongoConnection = async () => {
    if(!dbConnection){
        try{
            // we connect to our database =)
            await client.connect()

            // store the database instance to the variable dbConnection
            dbConnection = client.db("products-db");
            console.log('Connected to Mongo DB.')
        }
        catch(error){
            console.error(`Cannot connect to mongo.`)
            throw new Error(error)
        }
    }
}

export const getDatabaseInstance = () => {
    // better safe then sorry, check if a value is defined in the variable
    if(!dbConnection){
        throw new Error('Database connection not initiated');
    }
    return dbConnection
};
