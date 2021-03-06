// Copyright 2016 Google Inc.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//      http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var dataCacheName = 'BenzData-v1';
var cacheName = 'BenzPWA-final-1';
var filesToCache = [
  '/',
  './',
  './index.html',
  './logo_1.png',
  './manifest.json',
  './service-worker.js',
  './css/styles.css',
  './css/styles1.css',
  './images/eye.png',
  './images/fb.png',
  './images/fs.png',
  './images/gp.png',
  './images/logo_text_dark_16.png',
  './images/tw.png',
  './index/logo_1.png',
  './index/OKpQVe44',
  './OKpQVe44/532519.json',
  './OKpQVe44/532630.json',
  './OKpQVe44/ammo.dcab07b.js',
  './OKpQVe44/config.json',
  './OKpQVe44/engine.min.js',
  './OKpQVe44/logo_1.png',
  './OKpQVe44/manifest.json',
  './OKpQVe44/styles.css',
  './OKpQVe44/game-scripts.js',
  './OKpQVe44/loading.js',
  './OKpQVe44/start.js',
  './OKpQVe44/files/assets/8236996/1/Alcantara_DFS.jpg',
  './OKpQVe44/files/assets/8236999/1/BODY.json',
  './OKpQVe44/files/assets/8237000/1/BODY.json',
  './OKpQVe44/files/assets/8237013/1/DOOR.json',
  './OKpQVe44/files/assets/8237014/1/DOOR.json',
  './OKpQVe44/files/assets/8237022/1/WHEEL.json',
  './OKpQVe44/files/assets/8237023/1/WHEEL.json',
  './OKpQVe44/files/assets/8237030/1/GRILL.json',
  './OKpQVe44/files/assets/8237031/1/GRILL.json',
  './OKpQVe44/files/assets/8237035/1/INTERIOR.json',
  './OKpQVe44/files/assets/8237037/1/INTERIOR.json',
  './OKpQVe44/files/assets/8237051/1/WHEEL_R.json',
  './OKpQVe44/files/assets/8237052/1/WHEEL_R.json',
  './OKpQVe44/files/assets/8237054/1/LOGO.json',
  './OKpQVe44/files/assets/8237055/1/LOGO.json',
  './OKpQVe44/files/assets/8237058/1/DOOR_R.json',
  './OKpQVe44/files/assets/8237059/1/DOOR_R.json',
  './OKpQVe44/files/assets/8237075/1/ROOF.json',
  './OKpQVe44/files/assets/8237076/1/ROOF.json',
  './OKpQVe44/files/assets/8237080/1/SEAT.json',
  './OKpQVe44/files/assets/8237081/1/SEAT.json',
  './OKpQVe44/files/assets/8237097/1/REAR_LIGHT.json',
  './OKpQVe44/files/assets/8237098/1/REAR_LIGHT.json',
  './OKpQVe44/files/assets/8237103/1/MORDING.json',
  './OKpQVe44/files/assets/8237104/1/MORDING.json',
  './OKpQVe44/files/assets/8237108/1/HEADLIGHT.json',
  './OKpQVe44/files/assets/8237109/1/HEADLIGHT.json',
  './OKpQVe44/files/assets/8237114/1/HDR_03_d.jpg',
  './OKpQVe44/files/assets/8237115/1/HDR_03_b.jpg',
  './OKpQVe44/files/assets/8237116/1/HDR_03_f.jpg',
  './OKpQVe44/files/assets/8237117/1/HDR_03_l.jpg',
  './OKpQVe44/files/assets/8237118/1/HDR_03_r.jpg',
  './OKpQVe44/files/assets/8237119/1/HDR_03_t.jpg',
  './OKpQVe44/files/assets/8237122/1/Dome_02.json',
  './OKpQVe44/files/assets/8237123/1/Dome_02.json',
  './OKpQVe44/files/assets/8237128/1/SHADOW.json',
  './OKpQVe44/files/assets/8237130/1/STEERING_WHEEL.json',
  './OKpQVe44/files/assets/8237131/1/STEERING_WHEEL.json',
  './OKpQVe44/files/assets/8237141/1/Plate_DFS 1.jpg',
  './OKpQVe44/files/assets/8237142/1/Wheel_TIRE.jpg',
  './OKpQVe44/files/assets/8237146/1/cardboard-orange.png',
  './OKpQVe44/files/assets/8237147/1/cardboard-white.png',
  './OKpQVe44/files/assets/8237149/1/BREAK.json',
  './OKpQVe44/files/assets/8237154/1/REAR_BLACK.json',
  './OKpQVe44/files/assets/8237177/1/DASHBOARD.json',
  './OKpQVe44/files/assets/8237178/1/DASHBOARD.json',
  './OKpQVe44/files/assets/8237198/1/asset.html',
  './OKpQVe44/files/assets/8237199/1/asset.css',
  './OKpQVe44/files/assets/8237204/1/BG.png',
  './OKpQVe44/files/assets/8237208/1/SCREEN.png',
  './OKpQVe44/files/assets/8237222/1/flare-front.jpg',
  './OKpQVe44/files/assets/8237223/1/flare-long.png',
  './OKpQVe44/files/assets/8237224/1/flare-red.png',
  './OKpQVe44/files/assets/8237225/1/blur.jpg',
  './OKpQVe44/files/assets/8240149/1/ground.json',
  './OKpQVe44/files/assets/8240540/1/DOOR.png',
  './OKpQVe44/files/assets/8240675/1/Interior_DFS.jpg',
  './OKpQVe44/files/assets/8240759/1/Carbon_Light_DFS.jpg',
  './OKpQVe44/files/assets/8241157/1/ConcreteTexture_512.jpg',
  './OKpQVe44/files/assets/8241219/1/sphere.json',
  './OKpQVe44/files/assets/8241242/1/image_vr.jpg',
  './OKpQVe44/files/assets/8241543/1/LeatherPerf_DFS.jpg',
  './OKpQVe44/files/assets/8241664/1/Carpet_DFS_512.jpg',
  './OKpQVe44/files/assets/8244968/1/HDR_03_S.jpg',
  './OKpQVe44/files/assets/8257549/1/SHADOW_F3.png',
  './OKpQVe44/files/assets/8259322/1/Break_FL.json',
  './OKpQVe44/files/assets/8259324/1/Break_FL.json',
  './OKpQVe44/files/assets/8259326/1/Break_FR.json',
  './OKpQVe44/files/assets/8259327/1/Break_FR.json',
  './OKpQVe44/files/assets/8259330/1/Break_REAR.json',
  './OKpQVe44/files/assets/8259331/1/Break_REAR.json',
  './OKpQVe44/files/assets/8259661/1/metal_normals_128.png',
  './OKpQVe44/files/assets/8264461/1/Dome_box.json',
  './OKpQVe44/files/assets/8294633/1/logo_p.png',
  './scripts/app.js',
  './styles/inline.css',
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  /*
   * Fixes a corner case in which the app wasn't returning the latest data.
   * You can reproduce the corner case by commenting out the line below and
   * then doing the following steps: 1) load app for first time so that the
   * initial New York City data is shown 2) press the refresh button on the
   * app 3) go offline 4) reload the app. You expect to see the newer NYC
   * data, but you actually see the initial data. This happens because the
   * service worker is not yet activated. The code below essentially lets
   * you activate the service worker faster.
   */
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('[Service Worker] Fetch', e.request.url);
  var dataUrl = 'www.linsfruit.com/benz/';
  if (e.request.url.indexOf(dataUrl) > -1) {
    /*
     * When the request URL contains dataUrl, the app is asking for fresh
     * weather data. In this case, the service worker always goes to the
     * network and then caches the response. This is called the "Cache then
     * network" strategy:
     * https://jakearchibald.com/2014/offline-cookbook/#cache-then-network
     */
    e.respondWith(
      caches.open(dataCacheName).then(function(cache) {
        return fetch(e.request).then(function(response){
          cache.put(e.request.url, response.clone());
          return response;
        });
      })
    );
  } else {
    /*
     * The app is asking for app shell files. In this scenario the app uses the
     * "Cache, falling back to the network" offline strategy:
     * https://jakearchibald.com/2014/offline-cookbook/#cache-falling-back-to-network
     */
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
  }
});


// self.addEventListener('fetch', function(e) {
//   e.respondWith(caches.match(e.request).catch(function() {
//     return fetch(e.request);
//   }).then(function(response) {
//     caches.open(dataCacheName).then(function(cache) {
//       cache.put(e.request, response);
//     });
//     return response.clone();
//   }).catch(function() {
//     console.log('[ServiceWorker] No match', key);
//   }));
// });
