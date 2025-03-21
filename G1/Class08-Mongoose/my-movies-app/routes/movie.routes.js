import { Router } from "express";
import MovieController from "../controllers/movie.controller.js";

const movieRouter = Router();
const movieController = new MovieController();

movieRouter.get("/", (req, res) => movieController.getMovies(req, res));
movieRouter.get("/:id", (req, res) => movieController.getMovie(req, res));
movieRouter.post("/", (req, res) => movieController.createMovie(req, res));
movieRouter.put("/:id", (req, res) => movieController.updateMovie(req, res));
movieRouter.delete("/:id", (req, res) => movieController.deleteMovie(req, res));

export default movieRouter;
