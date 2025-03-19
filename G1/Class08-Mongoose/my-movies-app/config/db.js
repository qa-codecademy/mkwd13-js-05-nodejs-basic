import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();
const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_CLUSTER, MONGO_DATABASE } =
  process.env;

// console.log(MONGO_USERNAME, MONGO_PASSWORD, MONGO_CLUSTER, MONGO_DATABASE);

const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.mongodb.net/${MONGO_DATABASE}?retryWrites=true&w=majority`;

export async function connectDB() {
  try {
    const connection = await mongoose.connect(MONGO_URI, {});
    console.log(`Mongodb connected: ${connection.connection.host}`);
  } catch (error) {
    console.error("MognoDb connection error:", error);
    process.exit(1);
  }
}
