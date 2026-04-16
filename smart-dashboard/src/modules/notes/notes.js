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