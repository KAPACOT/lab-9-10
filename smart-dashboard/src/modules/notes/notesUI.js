import { getNotes, addNote } from "./notes.js";

export function renderNotes(view) {
  view.innerHTML = `
    <h2>Notes</h2>
    <div id="list"></div>
  `;

  renderList();

  document.getElementById("fab").onclick = openModal;
}

function renderList() {
  const list = document.getElementById("list");

  list.innerHTML = getNotes().map(n => `
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
    addNote(document.getElementById("newNote").value);
    modal.classList.add("hidden");
    renderList();
  };
}