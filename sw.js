const CACHE_NAME = 'test-v1';

// Мы даже ничего не кэшируем, просто создаем видимость работы для сканера
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});
