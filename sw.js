const CACHE_NAME = 'upi-qr-v6';
const ASSETS = [
    './app/',
    '/app/index.html',
    '/app/style.css',
    '/app/app.js',
    '/app/manifest.json',
    '/assets/favicon.ico',
    '/assets/android-chrome-192x192.png',
    '/assets/android-chrome-512x512.png',
    '/assets/qr-bg.webp',
    'https://unpkg.com/qr-code-styling@1.5.0/lib/qr-code-styling.js',
    'https://unpkg.com/html5-qrcode',
    'https://cdn.jsdelivr.net/npm/html-to-image@1.11.11/dist/html-to-image.min.js'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    return caches.delete(key);
                }
            }));
        })
    );
});
