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

    --font-xs: 0.8rem;
    --font-sm: 1rem;
    --font-md: 1.3rem;
    --font-lg: 2.5rem;

    --padding-default: 1rem;
    --padding-sm: 5px;
    --margin-default: 1rem;
    --margin-sm: 5px;
    --margin-md: 1.5rem;
    --margin-lg: 2.5rem;

    --card-width-sm: 300px;
    --card-width-md: 500px;

    --bgc-secondary: #333;
  }

`;
