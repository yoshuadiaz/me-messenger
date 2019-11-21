import React from 'react';

import background from '../assets/static/backHero.png';
import footerImage from '../assets/static/hero-footer.png';

import { Container, Footer } from '../assets/styles/NotFound';
import { Buttonm, Linkm } from '../assets/styles/GlobalStyles';

const NotFound = () => (
  <Container image={background}>
    <h1>Page Not Not Found</h1>
    <h2>404</h2>
    <div>
      <Linkm to="/profile">Ir al perfil</Linkm>
      <Buttonm>Iniciar una nueva conversación</Buttonm>
      <Footer image={footerImage} />
    </div>
  </Container>
);

export default NotFound;
