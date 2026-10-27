/* Bid Vault (old phone version): switched off. This replaces the old offline helper,
   clears what it kept, and lets the "moved" page show. */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) await caches.delete(k);
    await self.registration.unregister();
    for (const c of await self.clients.matchAll({type: "window"})) { try { c.navigate(c.url.split("#")[0]); } catch (_) {} }
  })());
});
