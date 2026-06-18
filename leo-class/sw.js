const CACHE_NAME = "leo-class-20260618050213";
const ASSETS = [
  "./",
  "index.html",
  "style.css",
  "word-data.js",
  "app.js",
  "manifest.webmanifest",
  "assets/hero_student.jpg",
  "assets/map_main.jpg",
  "assets/npc_teacher.jpg",
  "assets/stage_phonics_a.jpg",
  "assets/stage_phonics_b.jpg",
  "assets/stage_phonics_c.jpg"
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('leo-class-') && key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  const isVersionedAsset = url.searchParams.has('v');
  if (isVersionedAsset) {
    event.respondWith(fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      return response;
    }).catch(() => caches.match(event.request).then(cached => cached || caches.match(event.request, { ignoreSearch: true }))));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
    return response;
  }).catch(() => caches.match('./'))));
});
