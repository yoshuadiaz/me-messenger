import styled from 'styled-components';
// import { colors } from './GlobalStyles';

export const Container = styled.div`
  grid-area: chats;
  display: flex;
  flex-direction: column;
  background-color: #F9F9F9;
  box-shadow: 5px 0 0.5em rgba(41, 41, 41, 0.24);
  padding: 10px 0 0;
  max-height: 100vh;
  position: relative;
  z-index: 10;
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
    background-color: #DADADA;
    border-radius: 10px;
    z-index: 99;
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
    background-color: #DADADA;
    transform: rotate(45deg);
    top: 25px;
    right: 15px;
  }
`;//Chats.jsx

export const ChatsWrapper = styled.div`
  height: calc(100vh - 126px);
  overflow: hidden;
  background: #161e29;
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
  button{
    position: fixed;
    bottom: 10px;
    left: 250px;
    :hover{
      background: repeating-radial-gradient(#CBD5E0, transparent 100px);
      box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.2);
    }
  }
`;//Chats.jsx

export const Chat = styled.div`
  display: flex;
  height: 75px;
  padding: 10px 0;
  align-items: center;
  border-bottom: 1px solid;
  transition: height .3s ease;
  &:hover, &.isActive {
    background-color: #D8585F;
    height: 95px;
    cursor: pointer;
    h3 {
      color: white;
    }
    p {
      color: #F2E1BF;
    }
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
      margin-left: 0;
      align-items: flex-end;
      justify-content: space-around;
    }
    h3{
      display: flex;
      width: 15vw;
      height: 34px;
      font-size: 18px;
      color: #35e3ff;
      align-items: center;
      justify-content: space-between;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    p{
      height: 1.5em;
      max-width: 10vw;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      font-size: 1em;
      color: #5E6876;
      line-height: 1em;
    }
    span{
      margin-right: 5px;
      font-size: 12px;
      color: rgba(0, 0, 0, .45);
    }
  }
`;//ChatItem.jsx
