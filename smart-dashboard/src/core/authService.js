// Заглушка Auth Service – возвращает фиктивного пользователя
export function getCurrentUser() {
  return {
    id: 'user123',
    name: 'Demo User',
    email: 'demo@example.com',
  };
}

export function isAuthenticated() {
  return true;
}