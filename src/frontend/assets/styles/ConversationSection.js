import styled, { css } from 'styled-components';
import bckImg from '../static/backChat.png';

export const Container = styled.div`
  grid-area: conversation;
  margin: 0;
  background-color: white;
  max-height: 100vh;
`;//Conversation.jsx

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 25px;
  background: #ffffff;
  height: 85px;
  border-bottom: 2px solid #F9F9F9;
  img{
    margin: 0 10px 0 0;
  }
  div{
    display: flex;
    align-items: center;
    button{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin: 10px;
      &:hover{
        cursor: pointer;
      }
    }
  }
  h2{
    span::after{
      content: "";
      margin: 0 10px;
      width: 10px;
      height: 10px;
      border-radius: 10px;
      background-color: #20AE2A;
    }
  }
`;//Conversation.jsx

export const MessagesWraper = styled.div`
  height: calc(100vh - 155px);
  background-color: #331E34;
  background-image: url(${bckImg});
  background-size: 70px;
  overflow-y: scroll;
  padding: 10px;
  &::-webkit-scrollbar{
    width: 4px;
    background-color: #DADADA;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb{
    width: 4px;
    background-color: #CBD5E0;
    border-radius: 4px;
  }
  h1{
    width: 100%;
    margin: 20% 0;
    font-size: 40px;
    color: white;
    text-align: center;
  }
`;//Conversation.jsx

export const Message = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: row-reverse;
  margin: 10px 0;
  ${(props) => props.fromFriend && css`flex-direction: row;`}
  p{
    width: 70%;
    padding: 10px;
    border-radius: 10px;
    background-color: #B8FAFE;
    color: #0C3B3F;
    ${(props) => props.fromFriend && css`background-color: #F9F9F9; color: rgba(0, 0, 0, .75);`}
  }
`;//Message.jsx

export const SendMessage = styled.div`
  position: relative;
  display: flex;
  width: 90%;
  height: 70px;
  margin: 0 5% 0;
  align-items: center;
  background-color: white;
  border-top: 2px solid #F9F9F9;
  input{
    width: 90%;
    margin: 0 5%;
    height: 30px;
    border-radius: 30px;
    padding: 5px;
    outline: 0;
    border: none;
    background-color: #F9F9F9;
  }
`;//Conversation.jsx

export const ButtonsWraper = styled.div`
  position: absolute;
  display: flex;
  right: 25px;
  height: 40px;
  justify-content: flex-end;
  align-items: center;
  button{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border-radius: 35px;
    margin-right: 5px;
    &:last-child{
      width: 50px;
      height: 50px;
      border-radius: 50px;
      background-color: #4D7EFB;
      margin: 0;
    }
    &:hover{
      cursor: pointer;
    }
    ${(props) => props.error && css`
      {
        :hover{
          cursor: default;
        }
      }
    `}
  }
`;
