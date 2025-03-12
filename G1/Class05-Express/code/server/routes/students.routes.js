import express from "express";
import {
  getStudents,
  getStudentById,
  addStudent,
  deleteStudent,
  updateStudent,
} from "../services/students.service.js";

const router = express.Router();

//1. Get all students
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

//2. Get student by id
router.get("/students/:id", (req, res) => {
  const studentId = req.params.id;
  try {
    const student = getStudentById(studentId);
    res.status(200).send(student);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// 3. Delete a student by id
router.delete("/students/:id", (req, res) => {
  const studentId = req.params.id;
  try {
    deleteStudent(studentId);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// 4. Add new student
router.post("/students", (req, res) => {
  const newStudentData = req.body;
  console.log(newStudentData);
  try {
    const createdStudent = addStudent(newStudentData);
    res.status(200).send(createdStudent);
  } catch (error) {
    res.status(500);
  }
});

// 5. Update student info
router.patch("/students/:id", (req, res) => {
  const studentUpdates = req.body;
  const studentId = req.params.id;
  try {
    const updatedStudent = updateStudent(studentId, studentUpdates);
    res.status(200).send(updatedStudent);
  } catch (error) {
    if (error.message === "Student not found") {
      res.status(404).send(error.message);
    } else {
      res.status(500);
    }
  }
});

export { router };
