import { getDB } from "../config/db.js";
import { ObjectId } from "mongodb";

export default class MovieService {
  async getAll() {
    return getDB().collection("myMovies").find({}).toArray();
  }

  async getById(id) {
    return getDB()
      .collection("myMovies")
      .findOne({ _id: new ObjectId(id) });
  }

  async create(movieData) {
    const result = await getDB().collection("myMovies").insertOne(movieData);
    // return result;
    return result.insertedId;
  }

  async update(id, movieData) {
    const result = await getDB()
      .collection("myMovies")
      .updateOne({ _id: new ObjectId(id) }, { $set: movieData });
    return result.modifiedCount > 0;
  }

  async delete(id) {
    const result = await getDB()
      .collection("myMovies")
      .deleteOne({ _id: new ObjectId(id) });
    // return result.deletedCount > 0 ? true : false
    // shortened way
    return result.deletedCount > 0;
  }
}
