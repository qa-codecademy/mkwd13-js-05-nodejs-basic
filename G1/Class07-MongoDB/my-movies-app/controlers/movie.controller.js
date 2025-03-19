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

  async createMovie(req, res) {
    try {
      const { name, description, genre, director, year } = req.body;
      const movieData = {
        name,
        director,
        description,
        genre,
        year,
        createdAt: new Date(),
      };
      const id = await this.movieService.create(movieData);
      res.status(201).json({ id, ...movieData });
      // const movie = await this.movieService.create(movieData);
      // res.status(201).json(movie)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateMovie(req, res) {
    try {
      const { name, description, genre, director, year } = req.body;

      const movieData = {
        ...(name && { name }),
        ...(description && { description }),
        ...(genre && { genre }),
        ...(director && { director }),
        ...(year && { year }),
        ...(rating && { rating }),
        updatedAt: new Date(),
      };

      // const movieData = { updatetAt: new Date() };
      // for (const [key, value] of Object.entries({
      //   name,
      //   description,
      //   genre,
      //   director,
      //   year,
      // })) {
      //   if (value) {
      //     movieData[key] = value;
      //   }
      // }

      // const movieData = {};
      // if (name) {
      //   movieData.name = name
      // }
      // if (description) {
      //   movieData.description = description
      // }
      // if (genre) {
      //   movieData.genre = genre
      // }
      // if (director) {
      //   movieData.director = director
      // }
      // if (year) {
      //   movieData.year = year
      // }
      // movieData.updatedAt = new Date();

      const success = await this.movieService.update(req.params.id, movieData);
      if (!success) {
        return res.status(404).json({ message: "Movie not found" });
      }
      res.json({ message: "Movie updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteMovie(req, res) {
    try {
      const success = await this.movieService.delete(req.params.id);
      if (!success) {
        return res.status(404).json({ message: "Movie not found" });
      }
      res.json({ message: "Movie delted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
