import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f8f8f8;
    color: #2f3459;
    -webkit-font-smoothing: antialiased;
    font-family: "Montserrat", sans-serif;
  }

  :root{
    --color-primary: #2f3459;
    --color-text: #333;

    --font-sm: 1rem;
    --font-md: 1.3rem;
    --font-lg: 2.5rem;

    --padding-default: 1rem;
    --marging-default: 1rem;

    --card-width-sm: 300px;
    --card-width-md: 500px;
  }

`;
