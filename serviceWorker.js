var cacheName = "travel-nepal-pwa"
var filesToCache = [
    '/', 
    '/css/style.css',
    '/images/slider.jpg',
    '/js/script.js',
    '/about.html',
    '/blog.html',
    '/destination.html',
    '/index.html',
    '/trekking.html',
    
   
]

/* start our service worker , and cache all our app content */

self.addEventListener('install', function(e){
    e.waitUntil(
        caches.open(cacheName).then(function(cache){
            return cache.addAll(filesToCache);
        })
    );
    self.skipWaiting();
});

/* serve cached content with offline */

self.addEventListener('fetch', function(e){
    e.respondWith(
        caches.match(e.request).then(function(response){
            return response || fetch(e.request);
        })
    );
});