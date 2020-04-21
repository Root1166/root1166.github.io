var cacheName = 'Search myApp';
var filesToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '../../css/styleSearch.css',
    ' ../../css/jquery.fancybox.min.css',
    '/main.js',
    '../../js/scriptSearch.js',
    '../../js/scriptSearch.js',
    '../../js/jquery.fancybox.min.js',
    '../../js/jquery.min.js',
    '../../img/icon-search.png'

];

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});


self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});