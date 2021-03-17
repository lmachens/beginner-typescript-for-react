import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    --primary-color: #00ba8a;
    --text-color: #fefefe;
    --background-color: #24282f;
    --border-radius: 10px;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    color: var(--text-color);
    background: var(--background-color);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  
`;

export default GlobalStyle;
