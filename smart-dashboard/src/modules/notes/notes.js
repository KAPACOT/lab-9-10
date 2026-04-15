import { notesDummy } from "./notesDummyData.js";
let notes = [...notesDummy];

export function getNotes() { return notes; }
export function addNote(note) {
  const newNote = { id: Date.now(), content: note.content, date: new Date().toISOString(), points: note.points || 1 };
  notes.push(newNote);
  return newNote;
}
export function deleteNote(id) { notes = notes.filter(n => n.id !== id); }
export function getTotalNotePoints() { return notes.reduce((s, n) => s + n.points, 0); }