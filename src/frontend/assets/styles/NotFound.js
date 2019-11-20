import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.image});
  background-repeat: repeat;
  background-color: #241A1E;
  background-size: 100px 100px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.div`
  position: absolute;
  background-image: url(${(props) => props.image});
  background-repeat: repeat;
  background-size: 300px 60px;
  width: 100%;
  height: 60px;
  bottom: 0;
  left: 0;
  right: 0;
`;
