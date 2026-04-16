import { getTasks, addTask, toggleTask } from "./tasks.js";

export function renderTasks(view) {
  view.innerHTML = `
    <h2>Tasks</h2>
    <input id="taskInput"/>
    <button id="addBtn">Add</button>
    <ul id="list"></ul>
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
    `<li onclick="toggle(${t.id})">${t.done ? "✔" : ""} ${t.title}</li>`
  ).join("");
}

window.toggle = id => {
  toggleTask(id);
  update();
};