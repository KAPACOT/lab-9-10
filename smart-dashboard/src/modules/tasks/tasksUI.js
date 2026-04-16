import { getTasks, addTask, toggleTask } from "./tasks.js";

export function renderTasks(view) {
  view.innerHTML = `
    <h2>Tasks</h2>
    <div id="list"></div>
  `;

  renderList();

  const fab = document.getElementById("fab");
  fab.style.display = "flex";
  fab.onclick = openModal;
}

function renderList() {
  const list = document.getElementById("list");
  const tasks = getTasks();

  if (!tasks.length) {
    list.innerHTML = `<div class="empty">No tasks yet</div>`;
    return;
  }

  list.innerHTML = tasks.map(t => `
    <div class="card task" data-id="${t.id}">
      <span>${t.title}</span>
      <input type="checkbox" ${t.done ? "checked" : ""}/>
    </div>
  `).join("");

  list.querySelectorAll(".task").forEach(el => {
    el.onclick = (e) => {
      // Не переключаем, если кликнули по чекбоксу (он сам переключится)
      if (e.target.tagName === "INPUT") return;
      toggleTask(Number(el.dataset.id));
      renderList();
    };
  });
}

function openModal() {
  const modal = document.getElementById("modal");
  modal.innerHTML = `
    <div class="modal-box">
      <input id="newTask" placeholder="Task" />
      <button id="save" class="btn">Add</button>
    </div>
  `;
  modal.classList.remove("hidden");

  document.getElementById("save").onclick = () => {
    const input = document.getElementById("newTask");
    addTask(input.value);
    modal.classList.add("hidden");
    renderList();
  };
}