import MovieService from "../services/movie.service.js";

export default class MovieController {
  constructor() {
    this.movieService = new MovieService();
  }

  async getMovies(req, res) {
    try {
      const movies = await this.movieService.getAll();
      res.send(movies);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}
