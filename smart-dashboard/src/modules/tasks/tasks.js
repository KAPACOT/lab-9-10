import { load, save } from "../../core/dataService.js";

export function getTasks() {
  return load().tasks;
}

export function addTask(title) {
  const data = load();
  data.tasks.push({ id: Date.now(), title, done: false });
  save(data);
}

export function toggleTask(id) {
  const data = load();
  const t = data.tasks.find(t => t.id === id);
  t.done = !t.done;
  save(data);
}