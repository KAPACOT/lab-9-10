import { getTotalPoints as getTasksPoints } from '../tasks/tasks.js';
import { getNotes } from '../notes/notes.js';

export function getTotalActivityPoints() {
  const tasksPoints = getTasksPoints();
  const notesPoints = getNotes().length; // каждая заметка дает 1 балл
  return tasksPoints + notesPoints;
}

export function getUserLevel(points) {
  return Math.floor(points / 10) + 1;
}