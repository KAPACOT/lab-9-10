import { getTasks, addTask, toggleTask } from "./tasks.js";

export function renderTasks(view) {
  const total = getTasks().filter(t => t.done).length * 5;

  view.innerHTML = `
    <div class="card">
      <h2>Total: ${total} pts</h2>

      <div style="display:flex; gap:8px; margin:12px 0;">
        <input id="taskInput" placeholder="New task"/>
        <button id="addBtn">Add</button>
      </div>

      <div id="list"></div>
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

  list.innerHTML = getTasks().map(t => `
    <div class="task ${t.done ? "done" : ""}">
      <div class="task-left" onclick="toggle(${t.id})">
        <input type="checkbox" ${t.done ? "checked" : ""}/>
        <span>${t.title}</span>
      </div>

      <div class="points">+5</div>
    </div>
  `).join("");
}

window.toggle = (id) => {
  toggleTask(id);
  update();
};