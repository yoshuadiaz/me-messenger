import React from 'react';
import {
  Container,
  ChatsSection,
  ConversationSection,
  ConversationHeader,
  FeauturesSection,
  SendMessage,
  MessageContainer,
  Profile,
  ChatContainer,
  Img,
  Imgs,
  Imgl,
} from '../assets/styles/Conversation';
import ChatItem from '../components/ChatItem';
import Message from '../components/Message';
import Searcher from '../components/Searcher';

import user from '../assets/static/user.jpg';

const Conversation = () => (
  <Container>
    <ChatsSection>
      <Profile>
        <div>
          <Img src={user} alt='user' />
          <h2>Nombre del Usuario</h2>
          <p>subtitulo</p>
        </div>
        <button type='button'>EDIT</button>
      </Profile>
      <Searcher />
      <ChatContainer>
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </ChatContainer>
    </ChatsSection>
    <ConversationSection>
      <ConversationHeader>
        <div>
          <Imgs src={user} alt='user' />
          <h2>Nombre del Usuario destino</h2>
        </div>
        <div>
          <button type='button'>Search</button>
          <button type='button'>Add Favorite</button>
          <button type='button'>Set remember</button>
        </div>
      </ConversationHeader>
      <MessageContainer>
        <Message fromFriend />
        <Message />
        <Message />
        <Message fromFriend />
        <Message />
        <Message />
        <Message fromFriend />
      </MessageContainer>
      <SendMessage>
        <input type='text' placeholder='Write a text' />
        <div>
          <button type='button'>Audio</button>
          <button type='button'>Adjunt</button>
          <button type='button'>Media</button>
          <button type='button'>Emojis</button>
        </div>
        <button type='button'>Send Message</button>
      </SendMessage>
    </ConversationSection>
    <FeauturesSection>
      <Searcher />
      <div className='user__contact'>
        <Imgl src={user} alt='user' />
        <h2>Usuario destinatario</h2>
        <p>subtitulo</p>
      </div>
      <div className='principal__actions'>
        <button type='button' className='call'>Call</button>
        <button type='button' className='videocall'>Video Call</button>
      </div>
      <div className='second__actions'>
        <h4>View Friends</h4>
        <h4>Add to Favorite</h4>
      </div>
      <div className='attachments'>
        <div className='attachment'>png</div>
        <div className='attachment'>gif</div>
        <div className='attachment'>mp3</div>
        <div className='attachment'>mp4</div>
        <div className='view__all'>View all</div>
      </div>
    </FeauturesSection>
  </Container>
);

export default Conversation;
