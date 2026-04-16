import { getNotes, addNote } from "./notes.js";

export function renderNotes(view) {
  view.innerHTML = `
    <div class="card">
      <textarea id="noteInput" placeholder="Write note"></textarea>
      <button id="addNote" class="btn">Add</button>
    </div>

    <div id="notesList" class="notes-grid"></div>
  `;

  document.getElementById("addNote").addEventListener("click", () => {
    const val = document.getElementById("noteInput").value;
    if (!val.trim()) return;

    addNote(val);
    renderNotes(view);
  });

  renderList();
}

function renderList() {
  const list = document.getElementById("notesList");

  list.innerHTML = getNotes().map(n => `
    <div class="note">${n.text}</div>
  `).join("");
}