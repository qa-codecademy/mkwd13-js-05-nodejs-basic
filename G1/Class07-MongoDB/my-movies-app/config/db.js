import { MongoClient } from "mongodb";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();
const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_CLUSTER, MONGO_DATABASE } =
  process.env;

// console.log(MONGO_USERNAME, MONGO_PASSWORD, MONGO_CLUSTER, MONGO_DATABASE);

// const MONGO_USERNAME = process.env.MONGO_USERNAME
// const MONGO_PASSWORD = process.env.MONGO_PASSWORD

// Validate requred environment variables
const requiredEnvVariables = [
  "MONGO_USERNAME",
  "MONGO_PASSWORD",
  "MONGO_CLUSTER",
  "MONGO_DATABASE",
];

const missingEnvVars = requiredEnvVariables.filter(
  (envVar) => !process.env[envVar]
);

// Create an array of required variable names and check which ones are missing.
// If any are missing, log an error and exit the process
if (missingEnvVars.length > 0) {
  console.error(
    "Missing requred environment variables:",
    missingEnvVars.join(",")
  );
  process.exit(1);
}

const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.mongodb.net/${MONGO_DATABASE}?retryWrites=true&w=majority`;

const client = new MongoClient(MONGO_URI);

// A variable db is initialized as null to later hold the database connection
let db = null;

export async function connectDB() {
  try {
    // Connect to MongoDB using client.connect()
    const connection = await client.connect();
    // Retrieve the database instance with connection.db() and assign it to db
    db = connection.db();
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("MogoDb connection error:", error);
    process.exit(1);
  }
}

// Returns the current db instance. If db is not yet initialized, it logs an error
export function getDB() {
  if (!db) {
    console.error("Database not initialized:", error);
  }
  return db;
}
