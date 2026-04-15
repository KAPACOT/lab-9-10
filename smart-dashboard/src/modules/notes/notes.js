import { getNotes as getStoredNotes, saveNotes } from '../../core/dataService.js';
import { notesDummy } from './notesDummyData.js';

let notes = getStoredNotes();
if (notes.length === 0) {
  notes = [...notesDummy];
  saveNotes(notes);
}

export function getNotes() {
  return notes;
}

export function addNote(note) {
  const newNote = {
    id: Date.now(),
    content: note.content,
    date: new Date().toLocaleString(),
    points: 1,
  };
  notes.push(newNote);
  saveNotes(notes);
  return newNote;
}

export function deleteNote(noteId) {
  notes = notes.filter((n) => n.id !== noteId);
  saveNotes(notes);
}