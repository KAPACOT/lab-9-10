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
    done: false
  });
  save(data);
}

export function toggleTask(id) {
  const data = load();
  const task = data.tasks.find(t => t.id === id);
  if (task) task.done = !task.done;
  save(data);
}