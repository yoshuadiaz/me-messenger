import styled, { css } from 'styled-components';

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
  margin: 10px 25px;
  height: 60px;
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
  height: calc(100vh - 165px);
  overflow-y: scroll;
  margin: 0 10px;
  &::-webkit-scrollbar{
    width: 4px;
    background-color: #DADADA;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb{
    width: 4px;
    background-color: #BBBBBB;
    border-radius: 4px;
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
    background-color: #4D7EFB;
    color: rgba(255, 255, 255, .8);
    ${(props) => props.fromFriend && css`background-color: #F9F9F9; color: rgba(0, 0, 0, .75);`}
  }
`;//Message.jsx

export const SendMessage = styled.div`
  position: relative;
  display: flex;
  width: 90%;
  height: 70px;
  margin: 10px 5% 0;
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
  }
`;
