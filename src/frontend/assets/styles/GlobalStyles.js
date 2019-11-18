import styled, { createGlobalStyle } from 'styled-components';

export const colors = {
  PRIMARY_COLOR: '#EB5D5D',
  SECONDARY_COLOR: '#50BDBE',
  BLACK_100: '#4A5568',
  BLACK_200: '#2D3748',
  GRAY_100: '#CBD5E0',
  GRAY_200: '#A0AEC0',
  SOFT_WHITE: '#F1FAFC',
};

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

export const Img = styled.img`
  border-radius: 50%;
  max-width: 60px;
  max-height: 60px;
  object-fit: cover;
  margin: 0;
  padding: 0;
`;

export const Imgs = styled(Img)`
  max-width: 50px;
  max-height: 50px;
`;

export const Imgsx = styled(Img)`
  max-width: 30px;
  max-height: 30px;
  margin: 0 10px;
`;

export const Imgl = styled(Img)`
  max-width: 100px;
  max-height: 100px;
`;
