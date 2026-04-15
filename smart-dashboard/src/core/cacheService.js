// Вспомогательные функции для кэширования (используется при необходимости)
export async function cacheData(key, data) {
  const cache = await caches.open('data-cache-v1');
  const response = new Response(JSON.stringify(data));
  await cache.put(key, response);
}

export async function getCachedData(key) {
  const cache = await caches.open('data-cache-v1');
  const response = await cache.match(key);
  return response ? response.json() : null;
}