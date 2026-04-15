export function formatDate(date) {
  return new Date(date).toLocaleDateString('ru-RU');
}

export function generateId() {
  return Date.now() + Math.floor(Math.random() * 1000);
}