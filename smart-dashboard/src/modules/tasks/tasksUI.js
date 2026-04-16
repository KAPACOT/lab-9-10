import { getTasks, addTask, toggleTask } from "./tasks.js";

export function renderTasks(view) {
  view.innerHTML = `
    <h2>Tasks</h2>

    <div class="card">
      <input id="taskInput" placeholder="New task"/>
      <button id="addBtn" class="btn-primary">Add</button>
    </div>

    <div id="list"></div>
  `;

  document.getElementById("addBtn").onclick = () => {
    addTask(document.getElementById("taskInput").value);
    renderTasks(view);
  };

  renderList();
}

function renderList() {
  const list = document.getElementById("list");

  list.innerHTML = getTasks().map(t => `
    <div class="task ${t.done ? "done" : ""}" data-id="${t.id}">
      <span>${t.title}</span>
      <input type="checkbox" ${t.done ? "checked" : ""}/>
    </div>
  `).join("");

  list.querySelectorAll(".task").forEach(el => {
    el.onclick = () => {
      toggleTask(Number(el.dataset.id));
      renderList();
    };
  });
}