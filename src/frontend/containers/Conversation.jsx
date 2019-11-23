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
      {actualConversation.hasError && <ConversationSection error="true" />}
      {actualConversation.isFetching && <ConversationSection loading="true" />}
      {!actualConversation.isFetching && !actualConversation.hasError && actualConversation.data.messages && (
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
