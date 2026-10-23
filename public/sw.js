/*
 * Minimal app-shell service worker (registered in production builds only).
 *
 *  - Page navigations: network first; if offline, fall back to the cached app shell
 *    so the installed app still opens.
 *  - /assets/* (Vite's content-hashed files): cache first, they never change.
 *  - Other same-origin GET requests (icons, manifest): serve from cache, refresh in the background.
 *
 * Bump CACHE_VERSION whenever this file's strategy changes to clear old caches.
 */
const CACHE_VERSION = 'v1';
const CACHE_NAME = `gorakhpur-food-guide-${CACHE_VERSION}`;
const APP_SHELL = ['/', '/manifest.webmanifest', '/favicon.svg'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith('gorakhpur-food-guide-') && key !== CACHE_NAME)
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

function putInCache(request, response) {
  // Only keep good, same-origin responses (never error pages or opaque cross-origin ones).
  if (response.ok && response.type === 'basic') {
    const copy = response.clone();
    caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
  }
  return response;
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => putInCache('/', response))
        .catch(() => caches.match('/')),
    );
    return;
  }

  if (url.pathname.startsWith('/assets/')) {
    event.respondWith(
      caches.match(request).then((cached) => cached || fetch(request).then((response) => putInCache(request, response))),
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      const refreshed = fetch(request).then((response) => putInCache(request, response));
      return cached || refreshed;
    }),
  );
});
