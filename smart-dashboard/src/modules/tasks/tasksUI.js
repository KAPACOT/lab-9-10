import { getMainContainer } from "../../core/uiContainer.js";
import { getTasks, addTask, completeTask, deleteTask, getTotalPoints } from "./tasks.js";

export function renderTasksUI() {
  const container = getMainContainer();
  const tasks = getTasks();
  const total = getTotalPoints();

  container.innerHTML = `
    <h2>Задачи</h2>
    <p>Всего очков: ${total}</p>
    <ul id="tasks-list" style="list-style: none; padding: 0;">
      ${tasks.map(t => `
        <li style="margin-bottom: 8px;">
          <input type="checkbox" ${t.completed ? "checked" : ""} data-id="${t.id}">
          <span style="text-decoration: ${t.completed ? "line-through" : "none"}">${t.title} (${t.points} pts)</span>
          <button data-delete="${t.id}">Удалить</button>
        </li>
      `).join("")}
    </ul>
    <div>
      <input type="text" id="new-task-title" placeholder="Новая задача">
      <input type="number" id="new-task-points" placeholder="Очки" min="1" value="1">
      <button id="add-task-btn">Добавить</button>
    </div>
  `;

  document.querySelectorAll("input[type=checkbox]").forEach(cb => {
    cb.addEventListener("change", e => {
      completeTask(Number(e.target.dataset.id));
      renderTasksUI();
    });
  });
  document.querySelectorAll("button[data-delete]").forEach(btn => {
    btn.addEventListener("click", e => {
      deleteTask(Number(e.target.dataset.delete));
      renderTasksUI();
    });
  });
  document.getElementById("add-task-btn").addEventListener("click", () => {
    const title = document.getElementById("new-task-title").value.trim();
    const points = parseInt(document.getElementById("new-task-points").value) || 1;
    if (title) { addTask({ title, points }); renderTasksUI(); }
  });
}