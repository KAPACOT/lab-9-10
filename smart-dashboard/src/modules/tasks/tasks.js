import { load, save } from "../../core/dataService.js";

export function getTasks() {
  return load().tasks;
}

export function addTask(title) {
  if (!title?.trim()) return;
  const data = load();
  data.tasks.push({
    id: Date.now(),
    title: title.trim(),
    done: false,
    createdAt: Date.now(),
    completedAt: null
  });
  save(data);
}

export function toggleTask(id) {
  const data = load();
  const task = data.tasks.find(t => t.id === id);
  if (task) {
    task.done = !task.done;
    task.completedAt = task.done ? Date.now() : null;
  }
  save(data);
}

export function deleteTask(id) {
  const data = load();
  data.tasks = data.tasks.filter(t => t.id !== id);
  save(data);
}

export function updateTask(id, newTitle) {
  if (!newTitle?.trim()) return;
  const data = load();
  const task = data.tasks.find(t => t.id === id);
  if (task) task.title = newTitle.trim();
  save(data);
}