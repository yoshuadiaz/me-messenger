import styled from 'styled-components';

import { fonts } from './GlobalStyles';

export const Container = styled.div`
  grid-area: conversation;
  width: 77.5vw;
  max-height: 100vh;
  background-image: url(${(props) => props.image});
  background-repeat: repeat;
  background-color: #241A1E;
  background-size: 100px 100px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1{
    font-size: 50px;
  }
  h2{
    font-size: 35px;
    margin: 10px 0;
    font-family: ${fonts.TITUTLOS};
  }
  div{
    width: 40%;
    display: flex;
    align-items: center;
    div{
      width: 77.5%;
    }
  }
`;

export const Footer = styled.div`
  position: absolute;
  background-image: url(${(props) => props.image});
  background-repeat: repeat;
  background-size: 300px 60px;
  width: 77.5%;
  height: 60px;
  bottom: 0;
  left: 22.5%;
  right: 0;
`;
