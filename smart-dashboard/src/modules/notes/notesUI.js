import { getNotes, addNote } from "./notes.js";

export function renderNotes(view) {
  view.innerHTML = `
    <h2>Notes</h2>

    <div class="card">
      <textarea id="noteInput"></textarea>
      <button id="addNote" class="btn-primary">Add</button>
    </div>

    <div id="notesList" class="notes-list"></div>
  `;

  document.getElementById("addNote").onclick = () => {
    addNote(document.getElementById("noteInput").value);
    renderNotes(view);
  };

  document.getElementById("notesList").innerHTML =
    getNotes().map(n => `
      <div class="note-card">${n.text}</div>
    `).join("");
}