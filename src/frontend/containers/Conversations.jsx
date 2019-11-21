import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
} from '../assets/styles/Conversation';
import ConversationSection from '../components/ConversationSection';

import Chats from '../components/Chats';
import { getActualConversation } from '../actions/actualConversation';
import { saveMessage } from '../actions/messages';

const Conversation = (props) => {
  const {
    conversations,
    actualConversation,
    getActualConversation,
    userId,
    saveMessage,
  } = props;
  return (
    <Container>
      <Chats
        conversations={conversations}
        handleOpenChat={getActualConversation}
      />
      {!actualConversation.isFetching && actualConversation.data.messages && !(actualConversation.data.messages.length > 0) && <p>No hay nada que mostrar</p>}
      {actualConversation.isFetching && <p>loading...</p>}
      {!actualConversation.isFetching && !actualConversation.hasError && actualConversation.data.messages && actualConversation.data.messages.length > 0 && (
        <ConversationSection
          data={actualConversation.data}
          me={userId}
          handleSaveMessage={saveMessage}
        />
      )}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  conversations: state.conversations,
  actualConversation: state.actualConversation,
  userId: state.user.data.id,
});

const mapDispatchToProps = {
  getActualConversation,
  saveMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Conversation);
