import { getMainContainer } from "../../core/uiContainer.js";
import { getTasks, addTask, completeTask, deleteTask, getTotalPoints } from "./tasks.js";

export function renderTasksUI() {
  const container = getMainContainer();
  const tasks = getTasks();
  const totalPoints = getTotalPoints();

  container.innerHTML = `
    <h2>Задачи</h2>
    <p>Всего очков: ${totalPoints}</p>
    <ul id="tasks-list" style="list-style: none; padding: 0;">
      ${tasks.map(task => `
        <li style="margin-bottom: 8px;">
          <input type="checkbox" ${task.completed ? "checked" : ""} data-id="${task.id}">
          <span style="text-decoration: ${task.completed ? "line-through" : "none"}">${task.title} (${task.points} pts)</span>
          <button data-delete="${task.id}">Удалить</button>
        </li>
      `).join("")}
    </ul>
    <div>
      <input type="text" id="new-task-title" placeholder="Новая задача">
      <input type="number" id="new-task-points" placeholder="Очки" min="1" value="1">
      <button id="add-task-btn">Добавить</button>
    </div>
  `;

  // Обработчики событий
  document.querySelectorAll("input[type=checkbox]").forEach(cb => {
    cb.addEventListener("change", (e) => {
      const id = Number(e.target.dataset.id);
      completeTask(id);
      renderTasksUI(); // перерисовка
    });
  });

  document.querySelectorAll("button[data-delete]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = Number(e.target.dataset.delete);
      deleteTask(id);
      renderTasksUI();
    });
  });

  document.getElementById("add-task-btn").addEventListener("click", () => {
    const titleInput = document.getElementById("new-task-title");
    const pointsInput = document.getElementById("new-task-points");
    const title = titleInput.value.trim();
    const points = parseInt(pointsInput.value) || 1;
    if (title) {
      addTask({ title, points });
      renderTasksUI();
    }
  });
}