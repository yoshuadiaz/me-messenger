import React from 'react';
import {
  MdSearch,
  MdFavoriteBorder,
  MdNotificationsNone,
  MdKeyboardVoice,
  MdAttachFile,
  MdPhotoCamera,
  MdInsertEmoticon,
  MdSend,
} from 'react-icons/md';

import {
  Container,
  Header,
  MessagesWraper,
  SendMessage,
  ButtonsWraper,
} from '../assets/styles/ConversationSection';
import { Imgs } from '../assets/styles/GlobalStyles';

import Message from './Message';

import user from '../assets/static/user.jpg';

const ConversationSection = (props) => (
  <Container>
    <Header>
      <div>
        <Imgs src={user} alt="user" />
        <h2>
          Nombre del Usuario destino
          <span />
        </h2>
      </div>
      <div>
        <button type="button">
          <MdSearch size={30} color="#DADADA" />
        </button>
        <button type="button">
          <MdFavoriteBorder size={30} color="#DADADA" />
        </button>
        <button type="button">
          <MdNotificationsNone size={30} color="#DADADA" />
        </button>
      </div>
    </Header>
    <MessagesWraper>
      <Message fromFriend />
      <Message />
      <Message />
      <Message fromFriend />
      <Message />
      <Message />
      <Message fromFriend />
    </MessagesWraper>
    <SendMessage>
      <input type="text" placeholder="Write a text" />
      <ButtonsWraper>
        <button type="button">
          <MdKeyboardVoice size={25} color="#BBBBBB" />
        </button>
        <button type="button">
          <MdAttachFile size={25} color="#BBBBBB" />
        </button>
        <button type="button">
          <MdPhotoCamera size={25} color="#BBBBBB" />
        </button>
        <button type="button">
          <MdInsertEmoticon size={25} color="#BBBBBB" />
        </button>
        <button type="button">
          <MdSend size={32} color="white" />
        </button>
      </ButtonsWraper>
    </SendMessage>
  </Container>
);

export default ConversationSection;
