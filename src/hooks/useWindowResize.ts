import { useEffect } from 'react';

export const useWindowResize = () => {
  const setScreenSize = () => {
    const vh = window.innerHeight * 0.01;
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth;
    const maxWidth = Math.min(37.5, windowWidth);

    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty(
      '--app-max-width',
      `${maxWidth}rem`
    );
  };

  useEffect(() => {
    setScreenSize();
    window.addEventListener('resize', setScreenSize);

    // 클린업 함수의 의미?
    return () => {
      window.removeEventListener('resize', setScreenSize);
    };
  }, []);
};

// 최적화 필요시에 고민
// const delay = 300;
// let timer = null;

// window.addEventListener('resize', function () {
//   clearTimeout(timer);
//   timer = setTimeout(function () {
//     console.log('resize event!');

//     if (window.innerWidth <= 800) {
//       alert('현재 브라우저 크기가 <= 800px');
//     }
//   }, delay);
// });
