import React from 'react';
import { Message as Container } from '../assets/styles/ConversationSection';
import { Imgsx } from '../assets/styles/GlobalStyles';

import user from '../assets/static/user.jpg';

const Message = (props) => {
  const { fromFriend, data: { content, type } } = props;
  return (
    <Container fromFriend={fromFriend} className='msg-received'>
      <Imgsx src={user} alt='user' />
      {type === 'text' && <p>{content}</p>}
    </Container>
  );
};

export default Message;
