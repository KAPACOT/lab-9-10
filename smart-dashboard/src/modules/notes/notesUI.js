import { getNotes, addNote } from "./notes.js";

export function renderNotes(view) {
  view.innerHTML = `
    <h2>Notes</h2>
    <textarea id="noteInput"></textarea>
    <button id="addNote">Save</button>
    <ul id="notesList"></ul>
  `;

  document.getElementById("addNote").onclick = () => {
    addNote(document.getElementById("noteInput").value);
    renderNotes(view);
  };

  document.getElementById("notesList").innerHTML =
    getNotes().map(n => `<li>${n.text}</li>`).join("");
}