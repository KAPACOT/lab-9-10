import { getTasks, addTask, toggleTask } from "./tasks.js";

export function renderTasks(view) {
  view.innerHTML = `
    <div class="card">
      <input id="taskInput" placeholder="New task"/>
      <button id="addBtn">Add task</button>
      <ul id="list"></ul>
    </div>
  `;

  document.getElementById("addBtn").onclick = () => {
    addTask(document.getElementById("taskInput").value);
    renderTasks(view);
  };

  update();
}

function update() {
  const list = document.getElementById("list");

  list.innerHTML = getTasks().map(t =>
    `<li class="${t.done ? "done" : ""}" onclick="toggle(${t.id})">${t.title}</li>`
  ).join("");
}

window.toggle = (id) => {
  toggleTask(id);
  update();
};