// Migration shim. The previous deploy registered a service worker at
// /sw.js with scope /, which then intercepted homepage and blog
// navigations and served stale precached HTML. The replacement SW lives
// at /tools/sw.js with scope /tools/ (see astro.config.mjs).
//
// Browsers with the old SW still installed will, on their next visit,
// fetch /sw.js to check for updates and find this script. It unregisters
// itself, clears all caches, and reloads open clients — leaving the
// browser with no SW for the homepage or blog. Once every prior visitor
// has hit the site at least once, this file can be deleted.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      await self.registration.unregister();
      const cacheNames = await self.caches.keys();
      await Promise.all(cacheNames.map((name) => self.caches.delete(name)));
      const clients = await self.clients.matchAll({ type: 'window' });
      for (const client of clients) {
        client.navigate(client.url);
      }
    })(),
  );
});
