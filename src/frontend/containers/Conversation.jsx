import React from 'react';
import {
  Container,
} from '../assets/styles/Conversation';

import Chats from '../components/Chats';
import ConversationSection from '../components/ConversationSection';
import Interactions from '../components/Interactions';

const Conversation = () => (
  <Container>
    <Chats />
    <ConversationSection />
    <Interactions />
  </Container>
);

export default Conversation;
