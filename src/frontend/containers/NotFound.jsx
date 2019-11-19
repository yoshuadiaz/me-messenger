import React from 'react';

import background from '../assets/static/backHero.png';
import footerImage from '../assets/static/hero-footer.png';

import { Container, Footer } from '../assets/styles/NotFound';

const NotFound = () => (
  <Container image={background}>
    <h1>Page Not Not Found</h1>
    <h2>404</h2>
    <Footer image={footerImage} />
  </Container>
);

export default NotFound;
