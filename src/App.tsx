import { useWindowResize } from './hooks/useWindowResize';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Base from './components/QrBottomSheet/Base';
import LostItem from './pages/ViewAllLostItem';
import DetailLostItem from './pages/ViewDetailLostItem';
import Weather from './pages/Weather';
import { theme } from './styles';
import GlobalStyle from './styles/globalStyles';

function App() {
  useWindowResize();

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MobileWrapper>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Base />} />
              <Route path="/lostItem" element={<LostItem />} />
              <Route path="/lostItem/detail" element={<DetailLostItem />} />
              <Route path="/weather" element={<Weather />} />
            </Routes>
          </BrowserRouter>
        </MobileWrapper>
      </ThemeProvider>
    </>
  );
}

const MobileWrapper = styled.div`
  max-width: 430px;
  height: calc(var(--vh, 1vh) * 100);
  padding: 20px;
  margin: auto;
  position: relative;
  overflow-y: auto;
  background-color: #ffffff;
`;

export default App;
