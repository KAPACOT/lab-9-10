import { getNotes, addNote, deleteNote, updateNote } from "./notes.js";
import { t } from "../../core/i18n.js";

let currentEditId = null;

export function renderNotes(view) {
  view.innerHTML = `
    <h2>${t("notes")}</h2>
    <div id="list"></div>
  `;

  renderList();

  const fab = document.getElementById("fab");
  fab.style.display = "flex";
  fab.onclick = () => openModal();
}

function renderList() {
  const list = document.getElementById("list");
  const notes = getNotes();

  if (!notes.length) {
    list.innerHTML = `<div class="empty">${t("noNotes")}</div>`;
    return;
  }

  list.innerHTML = notes.map(n => `
    <div class="card note-card" data-id="${n.id}">
      ${n.text}
    </div>
  `).join("");

  list.querySelectorAll(".note-card").forEach(el => {
    const id = Number(el.dataset.id);
    let pressTimer;

    el.addEventListener("touchstart", () => {
      pressTimer = setTimeout(() => confirmDelete(id), 500);
    });
    el.addEventListener("touchend", () => clearTimeout(pressTimer));
    el.addEventListener("touchmove", () => clearTimeout(pressTimer));
    el.addEventListener("mousedown", () => {
      pressTimer = setTimeout(() => confirmDelete(id), 500);
    });
    el.addEventListener("mouseup", () => clearTimeout(pressTimer));
    el.addEventListener("mouseleave", () => clearTimeout(pressTimer));

    el.addEventListener("click", () => openEditModal(id));
  });
}

function openModal(noteText = "") {
  const modal = document.getElementById("modal");
  currentEditId = null;

  modal.innerHTML = `
    <div class="modal-box">
      <textarea id="noteInput" placeholder="${t("writeNote")}">${noteText}</textarea>
      <div style="display: flex; gap: 8px;">
        <button id="saveNote" class="btn">${t("save")}</button>
        <button id="cancelModal" class="btn" style="background: var(--border); color: var(--text-primary);">${t("cancel")}</button>
      </div>
    </div>
  `;
  modal.classList.remove("hidden");
  document.getElementById("fab").style.display = "none";

  const input = document.getElementById("noteInput");
  input.focus();

  document.getElementById("saveNote").onclick = () => {
    const val = input.value.trim();
    if (val) {
      if (currentEditId) {
        updateNote(currentEditId, val);
      } else {
        addNote(val);
      }
    }
    modal.classList.add("hidden");
    document.getElementById("fab").style.display = "flex";
    renderList();
  };

  document.getElementById("cancelModal").onclick = () => {
    modal.classList.add("hidden");
    document.getElementById("fab").style.display = "flex";
  };
}

function openEditModal(id) {
  const note = getNotes().find(n => n.id === id);
  if (!note) return;
  currentEditId = id;
  openModal(note.text);
}

function confirmDelete(id) {
  const modal = document.getElementById("modal");
  modal.innerHTML = `
    <div class="modal-box">
      <p style="text-align: center; margin-bottom: 20px;">${t("confirmDelete")}</p>
      <div style="display: flex; gap: 8px;">
        <button id="deleteConfirm" class="btn" style="background: #ef4444;">${t("delete")}</button>
        <button id="deleteCancel" class="btn" style="background: var(--border); color: var(--text-primary);">${t("cancel")}</button>
      </div>
    </div>
  `;
  modal.classList.remove("hidden");
  document.getElementById("fab").style.display = "none";

  document.getElementById("deleteConfirm").onclick = () => {
    deleteNote(id);
    modal.classList.add("hidden");
    document.getElementById("fab").style.display = "flex";
    renderList();
  };

  document.getElementById("deleteCancel").onclick = () => {
    modal.classList.add("hidden");
    document.getElementById("fab").style.display = "flex";
  };
}