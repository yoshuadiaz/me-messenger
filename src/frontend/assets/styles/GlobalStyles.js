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

export const fonts = {
  TITUTLOS: "'Baloo Bhai', cursive",
  GENERAL: "'Josefin Sans', sans-serif",
};

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Baloo+Bhai|Josefin+Sans:400,700&display=swap');

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
    font-family: ${fonts.GENERAL};
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
  margin: 20px auto;
  padding: 10px 20px;
  border-radius: 40px;
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
  ${(props) => props.bgsecondary && css`
    {
      margin: 5px auto;
      background-color: ${colors.SECONDARY_COLOR};
      border: 2px solid ${colors.SECONDARY_COLOR};
      color: ${colors.SOFT_WHITE};
    }     
  `}
  ${(props) => props.bgblack100 && css`
    {
      margin: 5px auto;
      background-color: ${colors.BLACK_100};
      border: 2px solid ${colors.BLACK_100};
      color: ${colors.SOFT_WHITE};
    }     
  `}
  ${(props) => props.bgblack200 && css`
    {
      margin: 5px auto;
      background-color: ${colors.BLACK_200};
      border: 2px solid ${colors.BLACK_200};
      color: ${colors.SOFT_WHITE};
    }     
  `}
  ${(props) => props.bggray100 && css`
    {
      margin: 5px auto;
      background-color: ${colors.GRAY_100};
      border: 2px solid ${colors.GRAY_100};
      color: ${colors.SOFT_WHITE};
    }     
  `}
  ${(props) => props.bggray200 && css`
    {
      margin: 5px auto;
      background-color: ${colors.GRAY_200};
      border: 2px solid ${colors.GRAY_200};
      color: ${colors.SOFT_WHITE};
    }     
  `}
  ${(props) => props.bgsoftwhite && css`
    {
      margin: 5px auto;
      background-color: ${colors.SOFT_WHITE};
      border: 2px solid ${colors.SOFT_WHITE};
      color: ${colors.BLACK_100};
    }     
  `}
  ${(props) => props.bsecondary && css`
    {
      margin: 5px auto;
      border: 2px solid ${colors.SECONDARY_COLOR};
      color: ${colors.SECONDARY_COLOR};
    }     
  `}
  ${(props) => props.bblack100 && css`
    {
      margin: 5px auto;
      border: 2px solid ${colors.BLACK_100};
      color: ${colors.BLACK_100};
    }     
  `}
  ${(props) => props.bblack200 && css`
    {
      margin: 5px auto;
      border: 2px solid ${colors.BLACK_200};
      color: ${colors.BLACK_200};
    }     
  `}
  ${(props) => props.bgray100 && css`
    {
      margin: 5px auto;
      border: 2px solid ${colors.GRAY_100};
      color: ${colors.GRAY_100};
    }     
  `}
  ${(props) => props.bgray200 && css`
    {
      margin: 5px auto;
      border: 2px solid ${colors.GRAY_200};
      color: ${colors.GRAY_200};
    }     
  `}
  ${(props) => props.bsoftwhite && css`
    {
      margin: 5px auto;
      border: 2px solid ${colors.SOFT_WHITE};
      color: ${colors.SOFT_WHITE};
    }     
  `}
`;

export const Buttonsx = styled(Button)`
  width: 80px;
  height: 20px;
  margin: 10px auto;
  border-radius: 20px;
`;
export const Buttons = styled(Button)`
  width: 100px;
  height: 30px;
  margin: 10px auto;
`;
export const Buttonm = styled(Button)`
  width: 140px;
  height: 40px;
  margin: 20px auto;
  border-radius: 40px;
`;
export const Buttonl = styled(Button)`

`;

export const Icon = styled.button`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 50%;
  &:hover{
    cursor: pointer;
  }
`;

export const Icons = styled(Icon)`
  width: 20px;
  height: 20px;
`;

export const Iconm = styled(Icon)`
  width: 40px;
  height: 40px;
`;

export const Iconl = styled(Icon)`
  width: 50px;
  height: 50px;
`;
