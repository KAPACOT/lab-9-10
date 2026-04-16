import { getTasks, addTask, toggleTask } from "./tasks.js";

export function renderTasks(view) {
  view.innerHTML = `
    <div class="card">

      <div class="row space">
        <h2>Tasks</h2>
        <div class="badge">${getPoints()} pts</div>
      </div>

      <div class="input-row">
        <input id="taskInput" placeholder="New task"/>
        <button id="addBtn" class="btn">Add</button>
      </div>

      <div id="list"></div>

    </div>
  `;

  document.getElementById("addBtn").addEventListener("click", add);
  renderList();
}

function add() {
  const input = document.getElementById("taskInput");
  if (!input.value.trim()) return;

  addTask(input.value);
  input.value = "";
  renderList();
}

function renderList() {
  const list = document.getElementById("list");

  list.innerHTML = getTasks().map(t => `
    <div class="task ${t.done ? "done" : ""}" data-id="${t.id}">
      <input type="checkbox" ${t.done ? "checked" : ""}/>
      <span>${t.title}</span>
      <span class="points">+5</span>
    </div>
  `).join("");

  list.querySelectorAll(".task").forEach(el => {
    el.addEventListener("click", () => {
      toggleTask(Number(el.dataset.id));
      renderList();
    });
  });
}

function getPoints() {
  return getTasks().filter(t => t.done).length * 5;
}