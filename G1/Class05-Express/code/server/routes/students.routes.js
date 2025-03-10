import express from "express";
import {
  getStudents,
  getStudentById,
  addStudent,
  deleteStudent,
} from "../services/students.service.js";

const router = express.Router();

router.get("/students", (req, res) => {
  const queryData = req.query;
  console.log(queryData);

  // if no query passed, the query data will be an empty object, and it will return all the students
  // filter works ONLY by gender and country
  try {
    const students = getStudents(queryData);
    console.log(students);
    res.send(students);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

export { router };
