// Заглушка уведомлений
export function requestPermission() {
  if ('Notification' in window) {
    Notification.requestPermission();
  }
}

export function showNotification(title, options = {}) {
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification(title, options);
  }
}