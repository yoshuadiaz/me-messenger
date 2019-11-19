import styled, { css } from 'styled-components';

import { colors } from './GlobalStyles';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100vh;
  grid-template-areas: 'info auth';
`;

export const Background = styled.div`
  grid-area: info;
  background-image: url(${(props) => props.image});
  background-repeat: repeat;
  background-color: #241A1E;
  background-size: 100px 100px;
  color: #fff;
  padding: 1em 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Buildings = styled.div`
  background-image: url(${(props) => props.image});
  background-repeat: repeat;
  background-size: 300px 40px;
  width: 100%;
  height: 40px;
`;

export const AuthLogo = styled.figure`
  & img {
    width: 150px;
    height: 50px;
    object-fit: contain;
    padding-left: 1em;
  }
`;

export const Presentation = styled.div`
  padding-left: 1em;
  & p {
    font-size: 20px;
    margin-top: 1em;
  }
  & h1 {
    font-size: 3vw !important;
    font-weight: normal;
  }
  & em {
    font-style: normal;
    font-weight: bolder;
    color: ${colors.PRIMARY_COLOR};
    font-size: 5vw;
  }
`;

export const FormAuth = styled.div`
  grid-area: auth;
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #F9F9F9;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 0 2em;
  h1{
    width: 80%;
    text-align: center;
    margin: 60px auto 15px;
  }
  h2,
  h3{
    width: 80%;
    margin: 15px auto;
  }
  h3{
    text-align: center;
  }
  form{
    display: flex;
    width: 80%;
    margin: 0 auto;
    justify-content: center;
    flex-direction: column;
    border-bottom: 2px solid #DADADA;
    input{
      width: 80%;
      height: 30px;
      margin: 0 auto;
      text-indent: 10px;
      background-color: #CBD5E0;
      border-radius: 30px;
      border: none;
      outline: 0;
    }
  }
  div{
    display: flex;
    width: 80%;
    margin: 10px auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Anchor = styled.a`
  display: flex;
  width: 45%;
  height: 30px;
  margin: 5px;
  color: black;
  text-decoration: none;
  align-items: center;
  justify-content: flex-start;
  &:hover{
    cursor: pointer;
    text-decoration: underline;
  }
  svg{
    margin-right: 10px;
  }
  ${(props) => props.margin && css`
    {
      margin: 10px auto;
      width: auto;
    }     
  `}
`;
