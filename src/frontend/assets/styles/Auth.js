import styled, { css } from 'styled-components';

import { Link as LinkRouter } from 'react-router-dom';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  grid-template-rows: 100vh;
  grid-template-areas: "info auth";
`;

export const Background = styled.div`
  grid-area: info;
  img{
    width: 100%;
    height: 100vh;
    object-fit: cover;
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
      background-color: #BBBBBB;
      border-radius: 30px;
      border: none;
      outline: 0;
    }
    button{
      width: 120px;
      height: 30px;
      margin: 10px auto 20px;
      border-radius: 30px;
      border: 2px solid #4D7EFB;
      color: #4D7EFB;
      &:hover{
        cursor: pointer;
      }
    }
  }
  div{
    display: flex;
    width: 80%;
    margin: 10px auto;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Anchor = styled.a`
  display: flex;
  height: 30px;
  margin: 5px 0 5px 20%;
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
`;

export const Link = styled(LinkRouter)`
  width: 60%;
  margin: 15px auto;
  color: black;
  text-align: center;
  text-decoration: none;
  &:hover{
    cursor: pointer;
    text-decoration: underline;
  }
  ${(props) => props.btnregister && css`
    {
      display: flex;
      width: 120px;
      height: 30px;
      margin: 0 auto;
      border: 2px solid #20AE2A;
      color: #20AE2A;
      border-radius: 30px;
      align-items: center;
      justify-content: center;
      &:hover{
      cursor: pointer;
      text-decoration: none;
    }
    }     
  `}
`;
