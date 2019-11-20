import styled from 'styled-components';
import { colors } from './GlobalStyles';

export const Container = styled.div`
  grid-area: chats;
  display: flex;
  flex-direction: column;
  background-color: #F9F9F9;
  padding: 10px 0;
  max-height: 100vh;
  input{
    width: 80%;
  }
  img{
    margin-left: 10px
  }
`;//Chats.jsx

export const Profile = styled.div`
  position: relative;
  display: flex;
  height: 60px;
  align-items: center;
  margin: 15px 0;
  div{
    display: flex;
    min-width: 60%;
    align-items: center;
    margin-left: 10px;
    flex-wrap: wrap;
    h2{
      width: 100%;
      font-size: 20px;
    }
    p{
      width: 100%;
      font-size: 16px;
      color: rgba(0, 0, 0, .8);
    }
  }
  ul{
    position: absolute;
    display: none;
    padding-top: 5px;
    flex-direction: column;
    justify-content: space-evenly;
    width: 140px;
    height: 85px;
    top: -10px;
    right: -120px;
    background-color: ${colors.GRAY_100};
    border-radius: 10px;
    button,
    a{
      margin: 0 10px;
    }
  }
  span{
    position: absolute;
    display: none;
    width: 10px;
    height: 10px;
    background-color: ${colors.GRAY_100};
    transform: rotate(45deg);
    top: 25px;
    right: 15px;
  }
`;//Chats.jsx

export const ChatsWrapper = styled.div`
  max-height: calc(100vh - 126px);
  overflow-y: hidden;
  margin-right: 5px;
  &:hover{
    overflow-y: scroll;
  }
  &::-webkit-scrollbar{
    width: 2px;
    background-color: #DADADA;
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb{
    width: 2px;
    background-color: #CBD5E0;
    border-radius: 2px;
  }
  a{
    text-decoration: none;
  }
`;//Chats.jsx

export const Chat = styled.div`
  display: flex;
  height: 65px;
  margin: 10px 0;
  align-items: center;
  &:hover{
    background-color: #DADADA;
    cursor: pointer;
  }
  div{
    display: flex;
    height: 50px;
    margin-left: 10px;
    justify-content: center;
    flex-direction: column;
    &:first-child{
      width: 60%;
    }
    &:last-child{
      width: 20%;
      margin-left: 5px;
      align-items: flex-end;
      justify-content: space-around;
    }
    h3{
      display: flex;
      width: 100%;
      height: 34px;
      font-size: 18px;
      color: #4D7EFB;
      align-items: center;
      justify-content: space-between;
    }
    p{
      height: 16px;
      font-size: 14px;
      color: rgba(0, 0, 0, .75);
      overflow: hidden;
    }
    span{
      margin-right: 5px;
      font-size: 12px;
      color: rgba(0, 0, 0, .45);
    }
  }
`;//ChatItem.jsx
