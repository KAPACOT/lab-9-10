const KEY = "app_data";

// Миграция старых данных при загрузке
function migrate(data) {
  if (!data) return { tasks: [], notes: [] };
  
  // Добавляем createdAt для старых задач
  data.tasks = data.tasks.map(t => ({
    ...t,
    createdAt: t.createdAt || Date.now(),
    completedAt: t.completedAt || (t.done ? Date.now() : null)
  }));
  
  // Добавляем createdAt для старых заметок
  data.notes = data.notes.map(n => ({
    ...n,
    createdAt: n.createdAt || Date.now()
  }));
  
  return data;
}

export function load() {
  const raw = localStorage.getItem(KEY);
  const data = raw ? JSON.parse(raw) : { tasks: [], notes: [] };
  return migrate(data);
}

export function save(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}