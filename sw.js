// const PREFIX = 'V4';
// const CACHED_FILES = [
//     // Html
//     new Request('offline.html'),

//     // Css caches
//     new Request('assets/css/root.css'),
//     new Request('assets/css/style.css'),
//     new Request('assets/css/darkmode.css'),
//     new Request('assets/css/floating.css'),
//     new Request('assets/css/responsive.css'),

//     // Js caches
//     new Request('assets/js/drag.js'),
//     new Request('assets/js/init.js'),
//     new Request('assets/js/task.js'),
//     new Request('assets/js/const.js'),
//     new Request('assets/js/local.js'),
//     new Request('assets/js/settings.js'),
//     new Request('assets/js/floating.js'),
//     new Request('assets/js/functions.js'),

//     // Png caches
//     new Request('assets/img/logo.png'),
//     new Request('assets/img/logo.png'),
// ];
// self.addEventListener('install', (e) => {
//     self.skipWaiting();
//     e.waitUntil((async () => {
//             const cache = await caches.open(PREFIX);
//             await cache.addAll([...CACHED_FILES]);
//         })()
//     );
// });

// self.addEventListener('activate', (e) => {
//     clients.claim();
//     e.waitUntil((async () => {
//                 const keys = await caches.keys();
//                 await Promise.all(keys.map((key) => {
//                     if (!key.includes(PREFIX)) {
//                         return caches.delete(key)
//                     }
//                 }))
//             })()
//     )
// });

// self.addEventListener('fetch', (e) => {
//     // console.log(`Fetching : ${e.request.url}`);
//     if (e.request.mode === 'navigate') {
//         e.respondWith(
//             (
//                 async () => {
//                     try {
//                         const preloadE = await e.preloadResponse;
//                         if (preloadE) {
//                             return preloadE;
//                         }
//                         console.log(e)

//                         return await fetch(e.request);
//                     } catch (err) {
//                         const cache = await caches.open(PREFIX);
//                         return await cache.match('offline.html');
//                     }
//                 }
//             )()
//         )
//     }else if (CACHED_FILES.includes(e.request.url)) {
//         e.respondWith(caches.match(e.request))
//     }
// });