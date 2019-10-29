import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    font-family: 'Montserrat', 'Arial', 'sans-serif';
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }

`;

export default GlobalStyles;
