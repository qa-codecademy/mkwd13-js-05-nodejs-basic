import Movie from "../schemas/movie.schema.js";
import "../schemas/director.schema.js"; // must import the director schema bcause the movie schema uses it

export default class MovieService {
  async getAll(filter = {}) {
    const data = Movie.find(filter)
      // case-insensitive matching
      // locale: "en": the comparison should use English language rules
      // strength: 2: Compares the base characters and diacritics but ignores case differences
      .collation({ locale: "en", strength: 2 })
      .populate("director");
    return data;
  }

  async getById(id) {
    const movie = Movie.findById(id).populate("director");
    return movie;
  }

  async create(body) {
    return await Movie.create(body);
  }

  async update(id, body) {
    // Not good because it bypasses all the validations
    // return Movie.findByIdAndUpdate(id, body, { new: true });
    // the {new: true} flag returns the newly created document

    let movie = await Movie.findById(id);
    const updateData = { ...movie, ...body };
    movie.set(updateData);
    await movie.save();
    return movie;
  }

  async delete(id) {
    return Movie.findByIdAndDelete(id);
  }
}
