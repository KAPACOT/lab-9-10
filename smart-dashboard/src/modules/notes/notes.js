import { load, save } from "../../core/dataService.js";

export function getNotes() {
  return load().notes;
}

export function addNote(text) {
  if (!text?.trim()) return;
  const data = load();
  data.notes.push({
    id: Date.now(),
    text: text.trim()
  });
  save(data);
}

export function deleteNote(id) {
  const data = load();
  data.notes = data.notes.filter(n => n.id !== id);
  save(data);
}

export function updateNote(id, newText) {
  if (!newText?.trim()) return;
  const data = load();
  const note = data.notes.find(n => n.id === id);
  if (note) note.text = newText.trim();
  save(data);
}