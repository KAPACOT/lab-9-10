import { load } from "../../core/dataService.js";

export function getStats() {
  const data = load();
  const tasks = data.tasks;
  const notes = data.notes;

  const totalTasks = tasks.length;
  const doneTasks = tasks.filter(t => t.done).length;
  const activeTasks = totalTasks - doneTasks;
  const completionRate = totalTasks ? Math.round((doneTasks / totalTasks) * 100) : 0;

  // Среднее время выполнения (в часах)
  const completedTasks = tasks.filter(t => t.done && t.createdAt && t.completedAt);
  let avgCompletionTime = 0;
  if (completedTasks.length) {
    const totalMs = completedTasks.reduce((sum, t) => sum + (t.completedAt - t.createdAt), 0);
    avgCompletionTime = totalMs / completedTasks.length / (1000 * 60 * 60); // в часах
  }

  // Последняя активность
  const allTimestamps = [
    ...tasks.map(t => t.createdAt),
    ...notes.map(n => n.createdAt)
  ].filter(Boolean);
  const lastActivity = allTimestamps.length ? Math.max(...allTimestamps) : null;

  // Последняя выполненная задача
  const lastCompletedTask = tasks
    .filter(t => t.done && t.completedAt)
    .sort((a, b) => b.completedAt - a.completedAt)[0];

  return {
    totalTasks,
    doneTasks,
    activeTasks,
    completionRate,
    avgCompletionTime: Math.round(avgCompletionTime * 10) / 10,
    totalNotes: notes.length,
    lastActivity,
    lastCompletedTask
  };
}