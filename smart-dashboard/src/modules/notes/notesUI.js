import { getNotes, addNote } from "./notes.js";

export function renderNotes(view) {
  view.innerHTML = `
    <div class="card">
      <textarea id="noteInput" placeholder="Write note..."></textarea>
      <button id="saveNote">Save</button>
      <ul id="notesList"></ul>
    </div>
  `;

  document.getElementById("saveNote").onclick = () => {
    addNote(document.getElementById("noteInput").value);
    renderNotes(view);
  };

  document.getElementById("notesList").innerHTML =
    getNotes().map(n => `<li>${n.text}</li>`).join("");
}