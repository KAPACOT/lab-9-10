// Простой Data Service с localStorage
const STORAGE_KEYS = {
  TASKS: 'smart_dashboard_tasks',
  NOTES: 'smart_dashboard_notes',
};

export function getTasks() {
  const data = localStorage.getItem(STORAGE_KEYS.TASKS);
  return data ? JSON.parse(data) : [];
}

export function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasks));
}

export function getNotes() {
  const data = localStorage.getItem(STORAGE_KEYS.NOTES);
  return data ? JSON.parse(data) : [];
}

export function saveNotes(notes) {
  localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(notes));
}