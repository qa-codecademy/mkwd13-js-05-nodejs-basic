import { Schema, model } from "mongoose";

const directorSchema = new Schema({
  firstName: {
    type: String,
    minLength: 3,
    maxLength: 30,
    required: [true, "firstName is required"],
  },
  lastName: {
    type: String,
    minLength: 3,
    maxLength: 30,
    required: [true, "lastName is required"],
  },
  birthYear: {
    type: Number,
    required: [true, "birthYear is required"],
  },
});

const Director = model("director", directorSchema, "directors");

export default Director;
