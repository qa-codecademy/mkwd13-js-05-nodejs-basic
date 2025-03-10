import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Routing refers to determining how an application responds to a client request to a particular endpoint,
// which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).
// Each route can have one or more handler functions, which are executed when the route is matched.

// Route definition takes the following structure:
// app.METHOD(PATH, HANDLER)

const app = express();
const PORT = process.env.PORT || 3000;

// 0.0.0.0 means that the server will be accessible from everywhere
// 127.0.0.1 means that it will be accessible from the local machine
const HOST = process.env.HOST || "0.0.0.0";

// Our server can accept JSON formats in the request
app.use(express.json());

// Set CORS policy
// The cors() middleware automatically adds the necessary headers to the response, allowing cross-origin requests
// This is crucial when your front-end and back-end are served from different domains or ports
app.use(
  cors({
    // methods: ["GET", "POST"]
  })
);

const currenFileURL = import.meta.url;
const currentFilePath = fileURLToPath(currenFileURL);
const projectPath = path.dirname(currentFilePath);

const staticHomePagePath = path.join(projectPath, "homePage"); // case insensitive
// console.log(staticHomePagePath);
const staticAboutPagePath = path.join(projectPath, "aboutPage");

app.use("/home", express.static(staticHomePagePath));
app.use("/about", express.static(staticAboutPagePath));

app.get("/", (req, res) => {
  res.send("Hello world!"); // Sending string as a response
});

app.get("/something", (req, res) => {
  //   res.send("Some text!");
  res.json({ message: "Some text!" }); // Sending json as a response
});

app.listen(PORT, HOST, () => {
  console.log(`App listening on port ${PORT}`);
});
