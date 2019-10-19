import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

  html {
    box-sizing: border-box;
  }

  *{
    margin: 0;
    padding: 0;
  }

  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }

  body {
    height: 100vh;
    width: 100%; 
    background: #fefefe;
    font-family: 'Lato', sans-serif;
  }
`;
