import styled, { css, createGlobalStyle } from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

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

export const Link = styled(LinkRouter)`
  margin: 15px auto;
  padding: 5px 10px;
  background-color: transparent;
  border-radius: 30px;
  border: 2px solid ${colors.PRIMARY_COLOR};
  color: ${colors.PRIMARY_COLOR};
  text-decoration: none;
  &:hover{
    cursor: pointer;
  }
  &:active{
    transform: scale(.9);
  }
  ${(props) => props.bgprimary && css`
    {
      margin: 5px auto;
      background-color: ${colors.PRIMARY_COLOR};
      color: ${colors.SOFT_WHITE};
    }     
  `}
`;

export const Linksx = styled(Link)`

`;

export const Links = styled(Link)`

`;

export const Linkm = styled(Link)`

`;

export const Linkl = styled(Link)`

`;

export const NavLink = styled(Link)`
  margin-right: 1em;
  padding: .5em 1em;
  display: inline-block;
  color: white;
  border-radius: 1em;
  border: 1px solid ${colors.PRIMARY_COLOR};
`;

export const Button = styled.button`
  width: 120px;
  height: 30px;
  margin: 15px auto;
  background-color: transparent;
  border-radius: 30px;
  border: 2px solid ${colors.PRIMARY_COLOR};
  color: ${colors.PRIMARY_COLOR};
  &:hover{
    cursor: pointer;
  }
  &:active{
    transform: scale(.9);
  }
  ${(props) => props.bgprimary && css`
    {
      margin: 5px auto;
      background-color: ${colors.PRIMARY_COLOR};
      color: ${colors.SOFT_WHITE};
    }     
  `}
`;

export const Buttonsx = styled(Button)`

`;
export const Buttons = styled(Button)`

`;
export const Buttonm = styled(Button)`

`;
export const Buttonl = styled(Button)`

`;

export const Icons = styled.button`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border-radius: 50%;
  &:hover{
    cursor: pointer;
  }
`;
