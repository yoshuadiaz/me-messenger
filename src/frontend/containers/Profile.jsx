import React from 'react';
import { connect } from 'react-redux';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions/users';

import { Container, Header, Data } from '../assets/styles/Profile';
import { Button } from '../assets/styles/GlobalStyles';

import header from '../assets/static/header.jpg';
import userImage from '../assets/static/user.jpg';

const Profile = (props) => {
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
      <Header>
        <Button bgray100="true">upload cover</Button>
        <img src={header} alt="cover" />
        <div>
          {
            hasUser ?
              <img src={gravatar(user.data.email)} alt={user.data.email} /> :
              <img src={userImage} alt="img-profie" />
          }
          <p>
            <Button bgray200="true">Change</Button>
            <Button bprimary="true">Delete</Button>
          </p>
        </div>
        <div>
          {
            hasUser &&
            <h1>{user.data.name}</h1>
          }
          <h2>Rol del usuario</h2>
        </div>
      </Header>
      <Data>
        <div>
          <h3>Email</h3>
          <p>correo@mail.com</p>
          <Button bsecondary="true">Edit</Button>
        </div>
        <div>
          <h3>Time Zone</h3>
          <p>(GMT-6) Ciudad de México, México</p>
          <Button bsecondary="true">Edit</Button>
        </div>
        <div>
          <h3>Language</h3>
          <p>English</p>
          <Button bsecondary="true">Edit</Button>
        </div>
        <div>
          <h3>Password</h3>
          <p>123</p>
          <Button bsecondary="true">Edit</Button>
        </div>
        <div>
          <Button bprimary="true" onClick={handleLogout}>Log out</Button>
        </div>
      </Data>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
