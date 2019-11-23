import React, { useState } from 'react';
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

import Loader from './Loader';

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

const ConversationSection = (props) => {
  const {
    data = {},
    me,
    handleSaveMessage,
    loading,
    error,
  } = props;

  const [message, setMessage] = useState('');

  if (error) {
    return (
      <Container>
        <Header>
          <div>
            <Imgs src={user} alt='user' />
            <h2>¡Error!</h2>
          </div>
          <div>
            <button type='button'>
              <MdSearch size={30} color='#DADADA' />
            </button>
            <button type='button'>
              <MdFavoriteBorder size={30} color='#DADADA' />
            </button>
            <button type='button'>
              <MdNotificationsNone size={30} color='#DADADA' />
            </button>
          </div>
        </Header>
        <MessagesWraper>
          <h1>¡Error!</h1>
        </MessagesWraper>
        <SendMessage>
          <input type='text' placeholder='¡Error!' disabled />
          <ButtonsWraper error="true">
            <button type='button'>
              <MdKeyboardVoice size={25} color='#CBD5E0' />
            </button>
            <button type='button'>
              <MdAttachFile size={25} color='#CBD5E0' />
            </button>
            <button type='button'>
              <MdPhotoCamera size={25} color='#CBD5E0' />
            </button>
            <button type='button'>
              <MdInsertEmoticon size={25} color='#CBD5E0' />
            </button>
            <button type='button'>
              <MdSend
                size={32}
                color='white'
              />
            </button>
          </ButtonsWraper>
        </SendMessage>
      </Container>
    );
  }

  if (loading) {
    return (
      <Container>
        <Header>
          <div>
            <Imgs src={user} alt='user' />
            <h2>Cargando...</h2>
          </div>
          <div>
            <button type='button'>
              <MdSearch size={30} color='#DADADA' />
            </button>
            <button type='button'>
              <MdFavoriteBorder size={30} color='#DADADA' />
            </button>
            <button type='button'>
              <MdNotificationsNone size={30} color='#DADADA' />
            </button>
          </div>
        </Header>
        <MessagesWraper>
          <Loader />
        </MessagesWraper>
        <SendMessage>
          <input type='text' placeholder='Cargando...' disabled />
          <ButtonsWraper>
            <button type='button'>
              <MdKeyboardVoice size={25} color='#CBD5E0' />
            </button>
            <button type='button'>
              <MdAttachFile size={25} color='#CBD5E0' />
            </button>
            <button type='button'>
              <MdPhotoCamera size={25} color='#CBD5E0' />
            </button>
            <button type='button'>
              <MdInsertEmoticon size={25} color='#CBD5E0' />
            </button>
            <button type='button'>
              <MdSend
                size={32}
                color='white'
              />
            </button>
          </ButtonsWraper>
        </SendMessage>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <div>
          <Imgs src={user} alt='user' />
          <h2>
            {data.title}
          </h2>
        </div>
        <div>
          <button type='button'>
            <MdSearch size={30} color='#DADADA' />
          </button>
          <button type='button'>
            <MdFavoriteBorder size={30} color='#DADADA' />
          </button>
          <button type='button'>
            <MdNotificationsNone size={30} color='#DADADA' />
          </button>
        </div>
      </Header>
      <MessagesWraper>
        {data.messages.length > 0 ? data.messages.map((msg) => (
          <Message
            key={msg._id}
            fromFriend={msg.from !== me}
            data={msg}
          />
        )) : <h1>Aun no hay ningun mensaje</h1>}
      </MessagesWraper>
      <SendMessage>
        <input type='text' placeholder='¿Hay alguna novedad?' onChange={(e) => setMessage(e.target.value)} />
        <ButtonsWraper>
          <button type='button'>
            <MdKeyboardVoice size={25} color='#CBD5E0' />
          </button>
          <button type='button'>
            <MdAttachFile size={25} color='#CBD5E0' />
          </button>
          <button type='button'>
            <MdPhotoCamera size={25} color='#CBD5E0' />
          </button>
          <button type='button'>
            <MdInsertEmoticon size={25} color='#CBD5E0' />
          </button>
          <button type='button'>
            <MdSend
              size={32}
              color='white'
              onClick={() => handleSaveMessage({
                inChat: data._id,
                from: me,
                to: data.members[0],
                type: 'text',
                content: message,
                created_at: new Date(),
              })}
            />
          </button>
        </ButtonsWraper>
      </SendMessage>
    </Container>
  );
};

export default ConversationSection;
