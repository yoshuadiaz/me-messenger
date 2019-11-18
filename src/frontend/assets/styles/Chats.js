import styled from 'styled-components';

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
  display: flex;
  height: 60px;
  align-items: center;
  margin: 15px 0;
  div{
    display: flex;
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
  button{
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border-radius: 50%;
    &:hover{
      cursor: pointer;
    }
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
