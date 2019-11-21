import React from 'react';
import { connect } from 'react-redux';
import { saveMessage } from '../actions/messages';

import ConversationSection from '../components/ConversationSection';
import Interactions from '../components/Interactions';

const Conversation = (props) => {
  const {
    actualConversation,
    userId,
    saveMessage,
  } = props;

  return (
    <>
      {!actualConversation.isFetching && actualConversation.data.messages && !(actualConversation.data.messages.length > 0) && <p>No hay nada que mostrar</p>}
      {actualConversation.isFetching && <p>loading...</p>}
      {!actualConversation.isFetching && !actualConversation.hasError && actualConversation.data.messages && actualConversation.data.messages.length > 0 && (
        <ConversationSection
          data={actualConversation.data}
          me={userId}
          handleSaveMessage={saveMessage}
        />
      )}
      <Interactions />
    </>
  );
};

const mapStateToProps = (state) => ({
  actualConversation: state.actualConversation,
  userId: state.user.data.id,
});

const mapDispatchToProps = {
  saveMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Conversation);
