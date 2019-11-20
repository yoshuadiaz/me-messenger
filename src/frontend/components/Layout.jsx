import React from 'react';
import { withRouter } from 'react-router';
import { GlobalStyles } from '../assets/styles/GlobalStyles';
import {
  Container,
} from '../assets/styles/Conversation';

import Chats from './Chats';

const LayoutWithRouter = (props) => {
  const { children, isLogged, history: { location: { pathname } } } = props;
  let content;

  if ((pathname === '/' || pathname === '/login' || pathname === '/register' || pathname === '/chats' || pathname === '/profile') && !isLogged) {
    return (
      <>
        <GlobalStyles />
        <div>{children}</div>
      </>
    );
  }

  if ((pathname === '/login' || pathname === '/register' || pathname === '/chats' || pathname === '/profile') && isLogged) {
    content = true;
  } else {
    content = false;
  }

  return (
    <>
      <GlobalStyles />
      {
        content ?
          (
            <Container content="true">
              <Chats />
              {children}
            </Container>
          ) : (
            <Container>
              <Chats />
              {children}
            </Container>
          )
      }
    </>
  );
};

const Layout = withRouter(LayoutWithRouter);
export default Layout;
