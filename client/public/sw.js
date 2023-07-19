const CACHE_NAME = 'Ripple';
const urlsToCache = ['/'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

// service-worker.js

// // 서비스 워커 설치
// self.addEventListener('install', event => {
//   console.log('Service Worker installed');
//   // 필요한 리소스를 캐싱하는 로직 작성 가능
// });
// 서비스 워커 활성화
self.addEventListener('activate', event => {
  console.log('Service Worker activated');
  // 이전 버전의 캐시 정리 또는 업데이트 로직 작성 가능
});
// 네트워크 요청 가로채기
// self.addEventListener('fetch', event => {
//   console.log('Fetch intercepted:', event.request.url);
//   // 캐시에서 리소스 반환 또는 네트워크 요청 수정 가능
// });
// 알림 수신
self.addEventListener('push', event => {
  console.log('Push notification received');
  // 알림을 처리하는 로직 작성 가능
});