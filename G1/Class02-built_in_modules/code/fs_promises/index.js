import path from "path";
import { fileURLToPath } from "url";
import { readNotes, readNoteById, createNote } from "./notesService.js";

const notesFilePath = ".\\data\\notes.json"; // must escape the backslash

// Creating path via path module
const currentFileURL = import.meta.url;
const projectPath = path.dirname(fileURLToPath(currentFileURL));
const notesPath = path.join(projectPath, "data", "notes.json");
console.log(notesPath);

const noteToAdd = {
  title: "Coding Notes",
  content: "Learn Nodejs and filesystem",
  timestamp: "2025-03-05T08:00:00Z",
};

const notes = await readNoteById(notesPath, 3);
console.log(notes);

// const addedNote = await createNote(notesFilePath, noteToAdd);
// console.log(addedNote);
