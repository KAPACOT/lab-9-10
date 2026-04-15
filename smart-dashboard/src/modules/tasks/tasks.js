import { getTasks as getStoredTasks, saveTasks } from '../../core/dataService.js';
import { tasksDummy } from './tasksDummyData.js';

let tasks = getStoredTasks();
if (tasks.length === 0) {
  tasks = [...tasksDummy];
  saveTasks(tasks);
}

export function getTasks() {
  return tasks;
}

export function addTask(task) {
  const newTask = {
    id: Date.now(),
    title: task.title,
    completed: false,
    points: task.points || 1,
  };
  tasks.push(newTask);
  saveTasks(tasks);
  return newTask;
}

export function completeTask(taskId) {
  const task = tasks.find((t) => t.id === taskId);
  if (task) {
    task.completed = true;
    saveTasks(tasks);
  }
  return task;
}

export function deleteTask(taskId) {
  tasks = tasks.filter((t) => t.id !== taskId);
  saveTasks(tasks);
}

export function getTotalPoints() {
  return tasks.filter((t) => t.completed).reduce((sum, t) => sum + t.points, 0);
}