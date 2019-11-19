import React from 'react';
import { connect } from 'react-redux';
import { MdSettings } from 'react-icons/md';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions/users';

import {
  Container,
  Profile,
  ChatsWrapper,
} from '../assets/styles/Chats';
import { Img, Link, Button } from '../assets/styles/GlobalStyles';

import ChatItem from './ChatItem';
import Searcher from './Searcher';

import userImage from '../assets/static/user.jpg';

const Chats = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user.data).length > 0;

  const handleLogout = () => {
    document.cookie = 'email=';
    document.cookie = 'name=';
    document.cookie = 'id=';
    document.cookie = 'token=';
    props.logoutRequest({});
    window.location.href = '/login';
  };

  return (
    <Container>
      <Profile>
        {
          hasUser ?
            <Img src={gravatar(user.data.email)} alt={user.data.email} /> :
            <Img src={userImage} alt="" />
        }
        <div>
          {
            hasUser ?
              <h2>{user.data.name}</h2> : null
          }
          <p>subtitulo</p>
        </div>
        <button type='button'>
          <MdSettings
            size={20}
            color='#DADADA'
            aria-label='Icon Settings'
          />
        </button>
        <ul>
          <li><Link to="/profile">Perfil</Link></li>
          <li><Button onClick={handleLogout}>Cerrar sesion</Button></li>
        </ul>
      </Profile>
      <Searcher />
      <ChatsWrapper>
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </ChatsWrapper>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chats);
