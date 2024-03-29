import React from 'react';
import { MdCheck } from 'react-icons/md';

import {
  Chat,
} from '../assets/styles/Chats';
import { Imgs } from '../assets/styles/GlobalStyles';

import chatImg from '../assets/static/user.jpg';

const ChatItem = (props) => {
  const { data: { title, messages, _id, type }, handleOpenChat, actualChat } = props;
  const lastMessage = messages.length > 0 ? messages[messages.length - 1] : false;
  return (
    <Chat className={actualChat === _id ? 'isActive' : ''} onClick={() => handleOpenChat(_id)}>
      <Imgs src={chatImg} alt='Chat' />
      <div>
        <h3>{title}</h3>
        {lastMessage && <p>{lastMessage}</p>}
        {!lastMessage && <p>{type}</p>}
      </div>
      <div>
        {lastMessage && <span>...</span>}
        <span>
          <MdCheck size={16} color='#CBD5E0' />
        </span>
      </div>
    </Chat>
  );
};

export default ChatItem;
