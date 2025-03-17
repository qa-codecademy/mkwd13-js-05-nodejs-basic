import MovieService from "../services/movie.service.js";

export default class MovieController {
  constructor() {
    this.movieService = new MovieService();
  }

  async getAllMovies(req, res) {
    try {
      const movies = await this.movieService.getAll();
      res.json(movies);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getMovieById(req, res) {
    try {
      const movie = await this.movieService.getById(req.params.id);
      if (!movie) {
        res.status(404).json({ message: "Movie not found" });
      }
      res.json(movie);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
