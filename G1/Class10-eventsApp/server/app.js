import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import { config } from "dotenv";
import { connectDB } from "./config/db.js";
import eventRouter from "./routes/event.routes.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Define the type of data
app.use(express.json());

app.use(
  cors({
    origin: "*", // allow all origins
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

// Routes
app.use("/api/events", eventRouter);

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
