import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { fileURLToPath } from "url";

const currenFileURL = import.meta.url;
const currentFilePath = fileURLToPath(currenFileURL);
const projectPath = path.dirname(currentFilePath);

const studentsPath = path.join(projectPath, "..", "data", "students.json");
console.log(studentsPath);

// 1. Get students data
const getStudents = (queryData) => {
  const students = JSON.parse(
    fs.readFileSync(studentsPath, { encoding: "utf-8" })
  );

  let updatedStudents = [...students];

  if (queryData?.gender) {
    updatedStudents = updatedStudents.filter(
      (student) => student.gender === queryData.gender
    );
  }
  if (queryData?.country) {
    updatedStudents = updatedStudents.filter(
      (student) => student.country === queryData.country
    );
  }

  if (updatedStudents.length <= 0) throw new Error("No students found");

  return updatedStudents;
};

// 2. Save students data
const saveStudentData = (students) => {
  fs.writeFileSync(studentsPath, JSON.stringify(students, 0, 2));
};

// 3. Add student
const addStudent = (newStudentData) => {
  const students = getStudents();

  const newStudent = {
    id: uuidv4(),
    // firstName: newStudentData.firstName,
    // lastName: newStudentData.lastName
    ...newStudentData,
  };

  const updatedStudents = [...students, newStudent];
  // same as
  // students.push(newStudent;)
  saveStudentData(updatedStudents);
  return newStudent;
};

const getStudentById = (studentId) => {
  const students = getStudents();
  const foundStudent = students.find((student) => student.id === studentId);
  if (!foundStudent) throw new Error("Student not found!");
  return foundStudent;
};

const deleteStudent = (studentId) => {
  const students = getStudents();
  const updatedStudents = students.filter(
    (student) => student.id !== studentId
  );
  if (students.length === updatedStudents.length) {
    throw new Error("Student to delete not found!");
  }
};

export { getStudents, getStudentById, addStudent, deleteStudent };
