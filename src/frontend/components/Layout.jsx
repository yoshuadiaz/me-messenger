import React from 'react';
import { withRouter } from 'react-router';
import { Helmet } from 'react-helmet';

import { GlobalStyles } from '../assets/styles/GlobalStyles';
import {
  Container,
} from '../assets/styles/Conversation';

import faviconpng from '../assets/static/On Dark@3x.png';

import Chats from './Chats';

const LayoutWithRouter = (props) => {
  const { children, isLogged, history: { location: { pathname } } } = props;
  let content = false;

  if (((pathname === '/' || pathname === '/login' || pathname === '/register' || pathname === '/chats' || pathname === '/profile' || pathname !== '/') && !isLogged)) {
    return (
      <>
        <GlobalStyles />
        <Helmet>
          <link rel="icon" href={faviconpng} type="image/png" />
          <link rel="shortcut icon" href={faviconpng} type="image/png" />
          <meta name="description" content="El mensajero interactivo para PROFESIONALES NÓMADAS. Lleva tus proyectos al siguiente nivel con una mejor comunicación sin sacrificar tu confort" />
        </Helmet>
        <div>{children}</div>
      </>
    );
  }

  if ((pathname === '/login' || pathname === '/register' || pathname === '/chats' || pathname === '/profile') && isLogged) {
    content = true;
  } else if ((pathname === '/') && isLogged) {
    return (
      <>
        <GlobalStyles />
        <Helmet>
          <link rel="icon" href={faviconpng} type="image/png" />
          <link rel="shortcut icon" href={faviconpng} type="image/png" />
          <meta name="description" content="El mensajero interactivo para PROFESIONALES NÓMADAS. Lleva tus proyectos al siguiente nivel con una mejor comunicación sin sacrificar tu confort" />
        </Helmet>
        <div>{children}</div>
      </>
    );
  }

  return (
    <>
      <GlobalStyles />
      <Helmet>
        <link rel="icon" href={faviconpng} type="image/png" />
        <link rel="shortcut icon" href={faviconpng} type="image/png" />
        <meta name="description" content="El mensajero interactivo para PROFESIONALES NÓMADAS. Lleva tus proyectos al siguiente nivel con una mejor comunicación sin sacrificar tu confort" />
      </Helmet>
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
