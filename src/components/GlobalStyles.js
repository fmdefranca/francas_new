import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --dark: #000000
  }

  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  html {
    box-sizing: border-box;
    font-size: 18px;
    font-family: 'Noto Serif', serif;
    color: #2f3640;
  }
  body {
    min-height: calc(100vh - 40px);
    font-size: 2rem;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: normal;
    font-style: italic;
    line-height: 1.5;
  }
  a {
    color: var(--dark);
  }
  p, ul, ol {
    line-height: 1.77777777777777776777777777;
    font-weight: 400;
  }
  ul {
    list-style-type: square;
  }

`;
export default GlobalStyles;
