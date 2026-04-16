import { getNotes, addNote } from "./notes.js";

export function renderNotes(view) {
  view.innerHTML = `
    <div class="card">
      <textarea id="noteInput"></textarea>
      <button id="addNote">Add</button>
    </div>

    <div class="notes-grid" id="notesList"></div>
  `;

  document.getElementById("addNote").onclick = () => {
    addNote(document.getElementById("noteInput").value);
    renderNotes(view);
  };

  document.getElementById("notesList").innerHTML =
    getNotes().map(n => `
      <div class="note">
        <div>${n.text}</div>
      </div>
    `).join("");
}