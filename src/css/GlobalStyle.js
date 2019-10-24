import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }

`;

export default GlobalStyles;
