import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/static/Logo_Wide@3x.png';
import buildingImg from '../assets/static/hero-footer.png';

import { AuthLogo, Presentation, Buildings } from '../assets/styles/Auth';

const AuthBackground = ({ isFull }) => (
  <>
    <AuthLogo>
      <Link to="/">
        <img src={logo} alt='Kiin' />
      </Link>
    </AuthLogo>
    <Presentation isFull={isFull}>
      <h1>
        El mensajero
        <br />
        interactivo para
        <br />
        <em>
          PROFESIONALES
          <br />
          NÓMADAS
        </em>
      </h1>
      <p>Lleva tus proyectos al siguiente nivel con una mejor comunicación sin sacrificar tu confort</p>
    </Presentation>
    <Buildings image={buildingImg} />
  </>
);

export default AuthBackground;
