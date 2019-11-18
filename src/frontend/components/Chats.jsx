import React from 'react';
import { MdSettings } from 'react-icons/md';

import {
  Container,
  Profile,
  ChatsWrapper,
} from '../assets/styles/Chats';
import { Img } from '../assets/styles/GlobalStyles';

import ChatItem from './ChatItem';
import Searcher from './Searcher';

import user from '../assets/static/user.jpg';

const Chats = (props) => (
  <Container>
    <Profile>
      <Img src={user} alt='user' />
      <div>
        <h2>Nombre del Usuario</h2>
        <p>subtitulo</p>
      </div>
      <button type='button'>
        <MdSettings
          size={20}
          color='#DADADA'
          aria-label='Icon Settings'
        />
      </button>
    </Profile>
    <Searcher />
    <ChatsWrapper>
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
    </ChatsWrapper>
  </Container>
);

export default Chats;
