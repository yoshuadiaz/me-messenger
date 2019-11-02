import React from 'react';
import { MdCheck } from 'react-icons/md';

import {
  Chat,
} from '../assets/styles/Chats';
import { Imgs } from '../assets/styles/GlobalStyles';

import chatImg from '../assets/static/user.jpg';

const ChatItem = () => (
  <Chat>
    <Imgs src={chatImg} alt="Chat" />
    <div>
      <h3>Vincent Van Gogh</h3>
      <p>It is good to love many things</p>
    </div>
    <div>
      <span>10:00 am</span>
      <span>
        <MdCheck size={16} color="#BBBBBB" />
      </span>
    </div>
  </Chat>
);

export default ChatItem;
