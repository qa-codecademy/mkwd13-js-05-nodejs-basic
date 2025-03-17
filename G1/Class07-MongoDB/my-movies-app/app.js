import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

// Define the type of data
app.use(express.json());

// Routes

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

// Connect to mongodb and start server
async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Sever is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
