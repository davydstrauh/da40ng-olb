const CACHE_NAME = 'da40ng-olb-v5.0.0';
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
  "./data/afm_full.js",
  "./assets/apple-touch-icon.png",
  "./assets/fig_cg_range.png",
  "./assets/fig_density_alt.png",
  "./assets/fig_elec.png",
  "./assets/fig_emerg_axe.png",
  "./assets/fig_emerg_hammer.png",
  "./assets/fig_formula_climb.png",
  "./assets/fig_formula_ga.png",
  "./assets/fig_fuel_dipstick.png",
  "./assets/fig_fuel_ind2.png",
  "./assets/fig_fuel_lr.png",
  "./assets/fig_fuel_qty_ind.png",
  "./assets/fig_fuel_std.png",
  "./assets/fig_gust_lock.png",
  "./assets/fig_heating_vent.png",
  "./assets/fig_hydraulic.png",
  "./assets/fig_inst_lighting.png",
  "./assets/fig_isa.png",
  "./assets/fig_loading.png",
  "./assets/fig_md302.png",
  "./assets/fig_moment_arms.png",
  "./assets/fig_moment_range.png",
  "./assets/fig_panel_g1000.png",
  "./assets/fig_panel_g1000_2.png",
  "./assets/fig_panel_sed_med.png",
  "./assets/fig_placards_baggage1.png",
  "./assets/fig_placards_baggage2.png",
  "./assets/fig_placards_flap_fuel.png",
  "./assets/fig_placards_static.png",
  "./assets/fig_prop_rpm.png",
  "./assets/fig_seat_hydrolok.png",
  "./assets/fig_seat_oam252.png",
  "./assets/fig_three_view.png",
  "./assets/fig_towbar_1.png",
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
  const url = new URL(event.request.url);
  const isImage = url.pathname.endsWith('.png') || url.pathname.endsWith('.jpg') || url.pathname.endsWith('.svg');

  if (isImage) {
    event.respondWith(
      caches.match(event.request, { ignoreSearch: true }).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((resp) => {
          if (!resp || resp.status !== 200) return resp;
          const clone = resp.clone();
          caches.open(CACHE_NAME).then((c) => c.put(event.request, clone));
          return resp;
        });
      })
    );
    return;
  }

  event.respondWith(
    fetch(event.request).then((resp) => {
      if (resp && resp.status === 200) {
        const clone = resp.clone();
        caches.open(CACHE_NAME).then((c) => c.put(event.request, clone));
      }
      return resp;
    }).catch(() =>
      caches.match(event.request, { ignoreSearch: true }).then((cached) => cached || caches.match('./index.html'))
    )
  );
});
