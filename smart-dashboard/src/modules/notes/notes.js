import { getNotes, addNote } from "./notes.js";

export function renderNotes(view) {
  view.innerHTML = `
    <h2>Notes</h2>
    <div id="notesList" class="notes-list"></div>
  `;

  renderList();
}

function renderList() {
  const list = document.getElementById("notesList");
  const notes = getNotes();

  if (!notes.length) {
    list.innerHTML = `<div class="empty">No notes yet</div>`;
    return;
  }

  list.innerHTML = notes.map(n => `
    <div class="note-card">${n.text}</div>
  `).join("");
}

/* modal */
window.addNoteFromModal = (text) => {
  if (!text.trim()) return;
  addNote(text);
  renderList();
};