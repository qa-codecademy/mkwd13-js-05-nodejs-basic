import express from "express";
import router from "./routes/products.routes.js";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

app.use("/api/products", router); // add router later

app.listen(PORT, HOST, () => {
  console.log(`Server is listening on port ${PORT}`);
});
