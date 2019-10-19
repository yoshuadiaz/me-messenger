import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 22.5% 55% 22.5%;
  grid-template-rows: 100vh;
  grid-template-areas: "chats conversation features"
`;

export const ChatsSection = styled.div`
  grid-area: chats;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  margin: 0;
  background-color: #F9F9F9;
  padding: 10px;
  max-height: 100vh;
  &::-webkit-scrollbar{
    width: 10px;
    background-color: #F9F9F9;
  }
`;

export const ConversationSection = styled.div`
  grid-area: conversation;
  margin: 0;
  background-color: white;
  max-height: 100vh;
`;

export const FeauturesSection = styled.div`
  grid-area: features;
  display: flex;
  flex-direction: column;
  margin: 0;
  background-color: #F9F9F9;
  padding: 10px;
  max-height: 100vh;
  overflow-y: scroll;
`;

export const MessageContainer = styled.div`
  height: calc(100vh - 165px);
  overflow-y: scroll;
`;

export const Message = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: row-reverse;
  margin: 10px;
  ${(props) => props.fromFriend && css`flex-direction: row;`}
  p{
    width: 70%;
    padding: 10px;
    border-radius: 10px;
    background-color: #4D7EFB;
    ${(props) => props.fromFriend && css`background-color: #F9F9F9;`}
  }
`;

export const Img = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin: 0;
  padding: 0;
`;

export const Imgs = styled(Img)`
  width: 50px;
  height: 50px;
`;

export const Imgsx = styled(Img)`
  width: 30px;
  height: 30px;
  margin: 0 10px;
`;

export const Imgl = styled(Img)`
  width: 100px;
  height: 100px;
`;

export const SendMessage = styled.div`
  display: flex;
  width: 90%;
  height: 70px;
  margin: 10px 5% 0;
  align-items: center;
  background-color: white;
  border-top: 2px solid #F9F9F9;
  input{
    position: relative;
    width: 90%;
    margin: 0 5%;
    height: 30px;
    border-radius: 30px;
    padding: 5px;
    outline: 0;
    border: none;
    background-color: #F9F9F9;
  }
  div{
    /* position: absolute; */
    display: none;
    margin: 0;
  }
  button{
    /* position: absolute; */
    display: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    outline: 0;
    border: none;
    background-color: #4D7EFB;
  }
`;

export const ConversationHeader = styled.div`
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
      background-color: #F9F9F9;
    }
  }
`;

export const Search = styled.input`
  width: 90%;
  height: 25px;
  border-radius: 25px;
  border: none;
  outline: 0;
  padding: 5px;
  margin: 20px auto;
`;

export const Profile = styled.div`
  display: flex;
  height: 60px;
  div{
    display: flex;
    /* flex-wrap: wrap; */
    h2{
      font-size: 20px;
    }
    p{
      font-size: 16px;
      color: lightgray;
    }
  }
  button{
    background-color: #4D7EFB;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: none;
    outline: 0;
  }
`;

export const Chat = styled.div`
  display: flex;
`;

export const ChatContainer = styled.div`
  max-height: calc(100vh - 126px);
  overflow-y: scroll;
`;
