import { getNotes, addNote } from "./notes.js";

export function renderNotes(view) {
  view.innerHTML = `
    <h2>Notes</h2>
    <div id="list"></div>
  `;

  renderList();

  const fab = document.getElementById("fab");
  fab.style.display = "flex";
  fab.onclick = openModal;
}

function renderList() {
  const list = document.getElementById("list");
  const notes = getNotes();

  if (!notes.length) {
    list.innerHTML = `<div class="empty">No notes yet</div>`;
    return;
  }

  list.innerHTML = notes.map(n => `
    <div class="card">${n.text}</div>
  `).join("");
}

function openModal() {
  const modal = document.getElementById("modal");
  modal.innerHTML = `
    <div class="modal-box">
      <textarea id="newNote"></textarea>
      <button id="save" class="btn">Add</button>
    </div>
  `;
  modal.classList.remove("hidden");

  document.getElementById("save").onclick = () => {
    const textarea = document.getElementById("newNote");
    addNote(textarea.value);
    modal.classList.add("hidden");
    renderList();
  };
}