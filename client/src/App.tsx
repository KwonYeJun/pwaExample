import React,{useEffect} from 'react';
import { Routes, Route, Link,useLocation  } from 'react-router-dom';

import './App.css';

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function App() {
  // 서비스 워커 등록
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/sw.js')
//       .then(registration => {
//         console.log('Service Worker registered:', registration);
//       })
//       .catch(error => {
//         console.log('Service Worker registration failed:', error);
//       });
//   });
// }



// async function requestNotificationPermission() {
//   if ('Notification' in window) {
//     const permission = await Notification.requestPermission();
//     if (permission !== 'granted') {
//       console.log('알림 권한이 거부되었습니다.');
//     }
//   }
// }

// useEffect(() => {
//   requestNotificationPermission();
// }, []);

// function handleNotificationClick() {
//   // 알림이 클릭되었을 때 수행할 동작을 정의합니다.
//   console.log('알림이 클릭되었습니다.');
// }

// function sendNotification() {
//   if ('Notification' in window && Notification.permission === 'granted') {
//     const notification = new Notification('해킹 알림이에요🎃', {
//       body: '알림을 설정해 주세요 찡긋',
//       icon: 'path_to_icon', // 알림 아이콘 경로
//     });

//     notification.addEventListener('click', handleNotificationClick);
//   }
// }


  
  return (

    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
      </Routes>
      {/* <button onClick={sendNotification}>test</button> */}
    </div>

  );
}

export default App;
