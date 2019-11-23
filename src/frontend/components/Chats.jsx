import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { MdSettings, MdAdd } from 'react-icons/md';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions/users';
import { getActualConversation } from '../actions/actualConversation';

import {
  Container,
  Profile,
  ChatsWrapper,
} from '../assets/styles/Chats';
import { Img, Link, Button, Icons, Iconm } from '../assets/styles/GlobalStyles';

import ChatItem from './ChatItem';
import Searcher from './Searcher';

import userImage from '../assets/static/user.jpg';

const Chats = (props) => {
  const { user, conversations, getActualConversation } = props;
  const hasUser = Object.keys(user.data).length > 0;

  const handleLogout = () => {
    document.cookie = 'email=';
    document.cookie = 'name=';
    document.cookie = 'id=';
    document.cookie = 'token=';
    props.logoutRequest({});
    window.location.href = '/login';
  };

  const handleAcount = () => {
    const btns = document.getElementById('acountActions');
    const decorator = document.getElementById('decoratorAcount');

    if (btns.style.display === 'flex' && decorator.style.display === 'block') {
      btns.style.display = 'none';
      decorator.style.display = 'none';
    } else {
      btns.style.display = 'flex';
      decorator.style.display = 'block';
    }
  };

  return (
    <Container>
      <Profile>
        {
          hasUser ?
            <Img src={gravatar(user.data.email)} alt={user.data.email} /> :
            <Img src={userImage} alt='' />
        }
        <div>
          {
            hasUser ?
              <h2>{user.data.name}</h2> : null
          }
        </div>
        <Icons onMouseEnter={handleAcount}>
          <MdSettings
            size={20}
            color='#DADADA'
            aria-label='Icon Settings'
          />
        </Icons>
        <ul onMouseLeave={handleAcount} id="acountActions">
          <li><Link to="/profile">Perfil</Link></li>
          <li><Button onClick={handleLogout}>Cerrar sesion</Button></li>
        </ul>
        <span id="decoratorAcount" />
      </Profile>
      <Searcher />
      <ChatsWrapper>
        {conversations && conversations.length > 0 && conversations.map((conv) => (
          <NavLink key={conv._id} to={`/chats/${conv._id}`} activeStyle={{ color: '#50BDBE' }}>
            <ChatItem
              data={conv}
              handleOpenChat={getActualConversation}
            />
          </NavLink>
        ))}
        <Iconm>
          <MdAdd
            size={30}
            color='#EB5D5D'
            aria-label='Icon New Coversation'
          />
        </Iconm>
      </ChatsWrapper>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  conversations: state.conversations.data,
  user: state.user,
});

const mapDispatchToProps = {
  logoutRequest,
  getActualConversation,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chats);
