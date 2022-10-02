const PREFIX = 'V11';
const CACHED_FILES = [
    new Request('style/bootstrap.css')
];
self.addEventListener('install', (e) => {
    self.skipWaiting();
    e.waitUntil((async () => {
            const cache = await caches.open(PREFIX);
            await cache.addAll([new Request('pages/offline.html'), new Request('style/bootstrap.css')]);
        })()
    );
});

self.addEventListener('activate', (e) => {
    clients.claim();
    e.waitUntil((async () => {
                const keys = await caches.keys();
                await Promise.all(keys.map((key) => {
                    if (!key.includes(PREFIX)) {
                        return caches.delete(key)
                    }
                }))
            })()
    )
});

self.addEventListener('fetch', (e) => {
    // console.log(`Fetching : ${e.request.url}`);
    if (e.request.mode === 'navigate') {
        e.respondWith(
            (
                async () => {
                    try {
                        const preloadE = await e.preloadResponse;
                        if (preloadE) {
                            return preloadE;
                        }
                        console.log(e)

                        return await fetch(e.request);
                    } catch (err) {
                        const cache = await caches.open(PREFIX);
                        return await cache.match('pages/offline.html');
                    }
                }
            )()
        )
    }else if (CACHED_FILES.includes(e.request.url)) {
        e.respondWith(caches.match(e.request))
    }
});