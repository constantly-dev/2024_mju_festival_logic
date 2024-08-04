import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  /* 스크롤 체이닝 막기위한 방법 = 모바일 아래 드래그로 새로고침 막는 코드*/
  /* overscroll-behavior: contain; */

  ${reset}
  * {
    box-sizing: border-box;
    font-family: sans-serif;
  }  


  html, body {
    margin: 0;
    padding: 0;
    /* rem 16px -> 10px로 초기화*/
    font-size: 62.5%;
  }

  a {
  cursor: pointer;
  text-decoration: none;
  color:inherit;
}

  
  button {
    border: none;
    background: none;
    cursor: pointer;
    font: inherit;
  }

  select {
    cursor: pointer;
  }

  input, textarea{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    resize: none;
  }
  input:focus, textarea:focus {
    outline: none;
  }
`;

export default GlobalStyle;
