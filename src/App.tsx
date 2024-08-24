import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyles';
import { theme } from './styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Base from './components/QrBottomSheet/Base';
import LostItem from './pages/ViewAllLostItem';
import DetailLostItem from './pages/ViewDetailLostItem';
import { useWindowResize } from './hooks/useWindowResize';

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
