import styled from 'styled-components';
import bckImg from '../../assets/static/backChat.png';

export const Container = styled.div`
  grid-area: content;
  display: flex;
  max-height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #331E34;
  background-image: url(${bckImg});
  background-size: 70px;
  h1{
    font-size: 35px;
    font-weight: 700;
    text-align: center;
    color: white;
  }
`;
