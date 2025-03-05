import { promises as fsPromises } from "fs";
import { logMessage } from "./logger.js";

const writeNotesToFile = async (filePath, notesToWrite) => {
  const notesJson = JSON.stringify(notesToWrite);
  await fsPromises.writeFile(filePath, notesJson);
  await logMessage(`Notes written to file: ${filePath}`);
};

const readNotes = async (filePath) => {
  try {
    const jsonData = await fsPromises.readFile(filePath, "utf-8");
    const notes = JSON.parse(jsonData);
    return notes;
  } catch (error) {
    await logMessage(`Error reading notes: ${error.message}`);
    return [];
  }
};

const readNoteById = async (filePath, noteId) => {
  const notes = await readNotes(filePath);
  const foundNote = notes.find((note) => note.id === noteId);
  if (!foundNote) {
    await logMessage(`Note with id ${noteId} not found`);
  }
  await logMessage(`Note with id ${noteId} read successfully`);
  return foundNote;
};

const createNote = async (filePath, newNote) => {
  const notes = await readNotes(filePath);
  const newNoteId = notes.length + 1;
  const noteToAdd = { id: newNoteId, ...newNote };
  notes.push(noteToAdd);
  await writeNotesToFile(filePath, notes);
  await logMessage(`Note with id ${newNoteId} created`);
  return noteToAdd;
};

// Create a function that will update note by id
// const updateNote = async (filePath, updatedNote, noteId) => {}

// Create a function that will delete note by id
// const deleteNote = async (filePath, noteId) => {}

export { readNotes, readNoteById, createNote };
