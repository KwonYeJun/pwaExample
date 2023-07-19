import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(
      function(registration) {
        console.log('Service Worker 등록 성공:', registration.scope);
      },
      function(error) {
        console.log('Service Worker 등록 실패:', error);
      }
    );
  });
}
// async function requestNotificationPermission() {
//   const permission = await Notification.requestPermission();
//   if (permission === 'granted') {
//     console.log('알림 권한이 허용되었습니다.');
//   } else {
//     console.log('알림 권한이 거부되었습니다.');
//   }
// }
// requestNotificationPermission();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter >
    <App />

  </BrowserRouter>
);

