import React from 'react';
import { Imgs } from '../assets/styles/Conversation';

import chatImg from '../assets/static/user.jpg';

const ChatItem = () => (
  <div className='chat'>
    <div className='chat__img'>
      <Imgs src={chatImg} alt='Chat' />
    </div>
    <div className='chat__contact'>
      <div className='chat__contact-name'>
        Vincent Van Gogh
      </div>
      <div className='chat__contact-time'>10:00</div>
      <div className='chat__contact-last-msg'>It is good to love many things...</div>
      <div className='chat__contact--options'>options</div>
    </div>
  </div>
);

export default ChatItem;
