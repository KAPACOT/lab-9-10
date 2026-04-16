import { load, save } from "../../core/dataService.js";

export function getNotes() {
  return load().notes;
}

export function addNote(text) {
  const data = load();
  data.notes.push({ id: Date.now(), text });
  save(data);
}