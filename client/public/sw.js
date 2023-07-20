const CACHE_NAME = 'Ripple';
const urlsToCache = ['/'];

// self.addEventListener('install', (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       console.log('Opened cache');
//       return cache.addAll(urlsToCache);
//     })
//   );
// });


self.addEventListener('install', event => {
  console.log('Service Worker installed');
// * 이벤트 waitUntil은 서비스 워커가 설치 되면 아래 코드들이 실행 되어 완료 될 때 까지 기다리게 만든다.
  event.waitUntil(
    // caches.open은 Ripple이라는 이름의 캐시를 열고 필요한 리소스를 캐싱하는 로직을 구현 한다.
    caches.open('Ripple').then(caches =>{
      return caches.addAll(['/'])
      //여기에는 필요한 리소스를 캐싱한다.
    }).then(() => {
      console.log('Resources 뭐시기')
    })

  )
});

self.addEventListener('fetch',event =>{
  console.log("fetch intercepted:", event.request.url);
  // event.respondWith()를 사용하여 네트워크 요청을 가로채고, 캐시에서 해당 요청에 대한 리소스를 찾아 반환하거나 캐시에 리소스가 없는 경우 원본 네트워크 요청을 진행한다.
  event.respondWith(
    caches.match(event.request)
    .then((response) => {
      if(response){
        return response
      }
      else{
        return fetch(event.request);
      }
    })
    .then(error => {
      console.error('error에러 발생',error);
    })
  )

});

// self.addEventListener('fetch', (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       if (response) {
//         return response;
//       }
//       return fetch(event.request);
//     })
//   );
// });

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
self.addEventListener('fetch', event => {
  console.log('Fetch intercepted:', event.request.url);
  // 캐시에서 리소스 반환 또는 네트워크 요청 수정 가능
});
// 알림 수신
self.addEventListener('push', event => {
  console.log('Push notification received');
  // 알림을 처리하는 로직 작성 가능
});