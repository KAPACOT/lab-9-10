import { getTasks, addTask, toggleTask } from "./tasks.js";
import { t } from "../../core/i18n.js";

export function renderTasks(view) {
  view.innerHTML = `
    <div class="card">
      <input id="taskInput" placeholder="${t("newTask")}" />
      <button id="addBtn">${t("addTask")}</button>
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

  list.innerHTML = getTasks().map(tk =>
    `<li class="${tk.done ? "done" : ""}" onclick="toggle(${tk.id})">${tk.title}</li>`
  ).join("");
}

window.toggle = (id) => {
  toggleTask(id);
  update();
};