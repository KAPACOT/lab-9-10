import { getTasks, addTask, toggleTask } from "./tasks.js";

export function renderTasks(view) {
  view.innerHTML = `
    <h2>Tasks</h2>
    <div id="list"></div>
  `;

  renderList();
}

function renderList() {
  const list = document.getElementById("list");
  const tasks = getTasks();

  if (!tasks.length) {
    list.innerHTML = `<div class="empty">No tasks yet</div>`;
    return;
  }

  list.innerHTML = tasks.map(t => `
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

/* для modal */
window.addTaskFromModal = (text) => {
  if (!text.trim()) return;
  addTask(text);
  renderList();
};