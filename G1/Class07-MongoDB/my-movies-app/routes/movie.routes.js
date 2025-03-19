import { Router } from "express";
import MovieController from "../controlers/movie.controller.js";

const router = Router();
const movieController = new MovieController();

router.get("/", (req, res) => movieController.getAllMovies(req, res));
router.get("/:id", (req, res) => movieController.getMovieById(req, res));
router.post("/", (req, res) => movieController.createMovie(req, res));
router.put("/:id", (req, res) => movieController.updateMovie(req, res));
router.delete("/:id", (req, res) => movieController.deleteMovie(req, res));
// router.get("/", movieController.getAllMovies);

export default router;
