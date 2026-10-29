// Task Planner service worker — offline caching
// Bump this version string whenever you change files, so the browser fetches the new version
const CACHE = 'task-planner-v15';

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-180.png'
];

// Install: cache all app assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate: clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: try network first, fall back to cache (so CDN updates like Chart.js work when online)
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  // Same-origin files skip the browser's HTTP cache (GitHub Pages says "reuse for 10 min"),
  // so a new version shows up the next time the app opens instead of up to 10 minutes later.
  const sameOrigin = event.request.url.startsWith(self.location.origin);
  const req = sameOrigin ? new Request(event.request, { cache: 'no-cache' }) : event.request;

  event.respondWith(
    fetch(req)
      .then((response) => {
        // Cache successful responses for app assets
        if (response.ok && event.request.url.startsWith(self.location.origin)) {
          const clone = response.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
