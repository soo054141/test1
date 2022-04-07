import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  a {
    text-decoration: none;
  }
  * {
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
  }
  html {
    margin: 0;
    padding: 0;
    font-family: -apple-system, 'Lato', BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 10px;
    font-family: 'Lato';
    font-style: normal;
  }
`;
