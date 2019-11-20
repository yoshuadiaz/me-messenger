import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
} from '../assets/styles/Conversation';

import Chats from '../components/Chats';

const Conversation = (props) => {
  const { conversations } = props;
  return (
    <Container>
      <Chats conversations={conversations} />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  conversations: state.conversations,
});

export default connect(mapStateToProps, null)(Conversation);
