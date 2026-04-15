import { getMainContainer } from '../../core/uiContainer.js';
import { getTasks, addTask, completeTask, deleteTask } from './tasks.js';

export function renderTasksUI() {
  const container = getMainContainer();
  container.innerHTML = `
    <div class="module tasks-module">
      <h2>Задачи и привычки</h2>
      <form id="add-task-form">
        <input type="text" id="task-title" placeholder="Новая задача" required />
        <button type="submit">Добавить</button>
      </form>
      <ul id="tasks-list" class="tasks-list"></ul>
    </div>
  `;

  const form = document.getElementById('add-task-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const titleInput = document.getElementById('task-title');
    const title = titleInput.value.trim();
    if (title) {
      addTask({ title });
      titleInput.value = '';
      renderTaskList();
    }
  });

  renderTaskList();
}

function renderTaskList() {
  const list = document.getElementById('tasks-list');
  const tasks = getTasks();
  list.innerHTML = tasks
    .map(
      (task) => `
      <li class="task-item ${task.completed ? 'completed' : ''}">
        <span>${task.title} (${task.points} pts)</span>
        <div>
          ${
            !task.completed
              ? `<button class="complete-btn" data-id="${task.id}">✓</button>`
              : ''
          }
          <button class="delete-btn" data-id="${task.id}">✗</button>
        </div>
      </li>
    `
    )
    .join('');

  document.querySelectorAll('.complete-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      completeTask(id);
      renderTaskList();
    });
  });

  document.querySelectorAll('.delete-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      deleteTask(id);
      renderTaskList();
    });
  });
}