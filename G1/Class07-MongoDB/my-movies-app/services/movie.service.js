import { getDB } from "../config/db.js";
import { ObjectId } from "mongodb";

export default class MovieService {
  getAll() {
    return getDB().collection("myMovies").find({}).toArray();
  }

  getById(id) {
    return getDB()
      .collection("myMovies")
      .findOne({ _id: new ObjectId(id) });
  }
}
