const CACHE_NAME = 'upi-qr-v7';
const ASSETS = [
    './create/',
    '/create/index.html',
    '/create/style.css',
    '/create/script.js?v=2',
    '/create/manifest.json',
    '/assets/android-chrome-192x192.png',
    '/assets/android-chrome-512x512.png',
    '/assets/apple-touch-icon.png',
    '/assets/favicon-16x16.png',
    '/assets/favicon-32x32.png',
    '/assets/favicon.ico',
    '/assets/meta-banner.jpg',
    '/assets/mockup.webp',
    '/assets/style.css',
    '/assets/themes.json',
    '/assets/backgrounds/cutie.webp',
    '/assets/backgrounds/dark-tunnel.webp',
    '/assets/backgrounds/ghost-hand.webp',
    '/assets/backgrounds/hearts.webp',
    '/assets/backgrounds/kitten.webp',
    '/assets/backgrounds/media-player.webp',
    '/assets/backgrounds/paper-grid.webp',
    '/assets/backgrounds/pop-art.webp',
    '/assets/backgrounds/qr-bg.webp',
    '/assets/backgrounds/scrapbook.webp',
    '/assets/backgrounds/skull.webp',
    '/assets/backgrounds/sunburst.webp',
    '/assets/backgrounds/wall-light.webp',
    '/assets/fonts/inter-tight-v7-latin-500.woff2',
    '/assets/fonts/inter-tight-v7-latin-700.woff2',
    '/assets/fonts/inter-tight-v7-latin-regular.woff2',
    '/assets/icons/amazon.webp',
    '/assets/icons/bhim.webp',
    '/assets/icons/chatgpt.webp',
    '/assets/icons/claude.webp',
    '/assets/icons/dino.webp',
    '/assets/icons/donate.webp',
    '/assets/icons/flight.webp',
    '/assets/icons/food.webp',
    '/assets/icons/gemini.webp',
    '/assets/icons/gh.webp',
    '/assets/icons/gpay.webp',
    '/assets/icons/heart.webp',
    '/assets/icons/insta.webp',
    '/assets/icons/money.webp',
    '/assets/icons/paw.webp',
    '/assets/icons/paytm.webp',
    '/assets/icons/perp.webp',
    '/assets/icons/phonepe.webp',
    '/assets/icons/poop.webp',
    '/assets/icons/shop.webp',
    '/assets/icons/tg.webp',
    '/assets/icons/whatsapp.webp',
    '/assets/icons/x.webp',
    '/assets/themes/theme-1.webp',
    '/assets/themes/theme-2.webp',
    '/assets/themes/theme-3.webp',
    '/assets/themes/theme-4.webp',
    '/assets/themes/theme-5.webp',
    '/assets/themes/theme-6.webp',
    '/assets/themes/theme-7.webp',
    '/assets/themes/theme-8.webp',
    '/assets/themes/theme-9.webp',
    '/assets/themes/theme-10.webp',
    '/assets/themes/theme-11.webp',
    '/assets/themes/theme-12.webp',
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
