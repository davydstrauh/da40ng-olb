const CACHE_NAME = 'da40ng-olb-v1.0.0';
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./css/style.css",
  "./js/app.js",
  "./data/glossary.js",
  "./data/eqrh_emergency.js",
  "./data/eqrh_abnormal.js",
  "./data/eqrh_normal.js",
  "./data/afm_ch1_ch2.js",
  "./data/afm_ch5_ch9.js",
  "./assets/apple-touch-icon.png",
  "./assets/fig_cg_range.png",
  "./assets/fig_density_alt.png",
  "./assets/fig_elec.png",
  "./assets/fig_fuel_lr.png",
  "./assets/fig_fuel_std.png",
  "./assets/fig_hydraulic.png",
  "./assets/fig_isa.png",
  "./assets/fig_loading.png",
  "./assets/fig_moment_range.png",
  "./assets/fig_panel_g1000.png",
  "./assets/fig_three_view.png",
  "./assets/fig_wind.png",
  "./assets/icon-192.png",
  "./assets/icon-512.png"
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((resp) => {
        if (!resp || resp.status !== 200) return resp;
        const clone = resp.clone();
        caches.open(CACHE_NAME).then((c) => c.put(event.request, clone));
        return resp;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
