import { getTasks, addTask, toggleTask, deleteTask, updateTask } from "./tasks.js";
import { t } from "../../core/i18n.js";

let currentEditId = null;

export function renderTasks(view) {
  view.innerHTML = `
    <h2>${t("tasks")}</h2>
    <div id="list"></div>
  `;

  renderList();

  const fab = document.getElementById("fab");
  fab.style.display = "flex";
  fab.onclick = () => openModal();
}

function renderList() {
  const list = document.getElementById("list");
  let tasks = getTasks();

  tasks.sort((a, b) => a.done - b.done);

  if (!tasks.length) {
    list.innerHTML = `<div class="empty">${t("noTasks")}</div>`;
    return;
  }

  list.innerHTML = tasks.map(t => `
    <div class="card task ${t.done ? "done" : ""}" data-id="${t.id}">
      <span>${t.title}</span>
      <div style="display: flex; align-items: center; gap: 8px;">
        <input type="checkbox" ${t.done ? "checked" : ""}/>
        <button class="delete-btn" data-id="${t.id}" title="${t("delete")}">🗑️</button>
      </div>
    </div>
  `).join("");

  // Обработчики
  list.querySelectorAll(".task").forEach(el => {
    const id = Number(el.dataset.id);
    const checkbox = el.querySelector("input");
    const deleteBtn = el.querySelector(".delete-btn");

    checkbox.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleTask(id);
      renderList();
    });

    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      confirmDelete(id);
    });

    // Долгое нажатие
    let pressTimer;
    const startPress = () => {
      pressTimer = setTimeout(() => confirmDelete(id), 500);
    };
    const cancelPress = () => clearTimeout(pressTimer);

    el.addEventListener("touchstart", startPress);
    el.addEventListener("touchend", cancelPress);
    el.addEventListener("touchmove", cancelPress);
    el.addEventListener("mousedown", startPress);
    el.addEventListener("mouseup", cancelPress);
    el.addEventListener("mouseleave", cancelPress);

    el.addEventListener("click", (e) => {
      if (e.target.tagName !== "INPUT" && e.target.tagName !== "BUTTON") {
        openEditModal(id);
      }
    });
  });
}

function openModal(taskText = "") {
  const modal = document.getElementById("modal");
  currentEditId = null;

  modal.innerHTML = `
    <div class="modal-box">
      <input id="taskInput" placeholder="${t("newTask")}" value="${taskText}" autofocus />
      <div style="display: flex; gap: 8px;">
        <button id="saveTask" class="btn">${t("save")}</button>
        <button id="cancelModal" class="btn" style="background: var(--border); color: var(--text-primary);">${t("cancel")}</button>
      </div>
    </div>
  `;
  modal.classList.remove("hidden");
  document.getElementById("fab").style.display = "none";

  const input = document.getElementById("taskInput");
  input.focus();

  document.getElementById("saveTask").onclick = () => {
    const val = input.value.trim();
    if (val) {
      if (currentEditId) {
        updateTask(currentEditId, val);
      } else {
        addTask(val);
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
  const task = getTasks().find(t => t.id === id);
  if (!task) return;
  currentEditId = id;
  openModal(task.title);
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
    deleteTask(id);
    modal.classList.add("hidden");
    document.getElementById("fab").style.display = "flex";
    renderList();
  };

  document.getElementById("deleteCancel").onclick = () => {
    modal.classList.add("hidden");
    document.getElementById("fab").style.display = "flex";
  };
}