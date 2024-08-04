import { useEffect } from 'react';

import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyles';
import { theme } from './styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
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

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MobileWrapper>
          <BrowserRouter>
            <Routes>
              <Route path="/" element />
            </Routes>
          </BrowserRouter>
        </MobileWrapper>
      </ThemeProvider>
    </>
  );
}

const MobileWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
  background-color: gray;
  padding-right: 2rem;
  padding-left: 2rem;

  max-width: var(--app-max-width, 37.5rem);
  min-height: calc(var(--vh, 1vh) * 100);
`;

export default App;
