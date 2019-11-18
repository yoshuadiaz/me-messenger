import React from 'react';
import { FaTwitter, FaGoogle, FaFacebook } from 'react-icons/fa';

import back from '../assets/static/backHero.png';
import logo from '../assets/static/Logo_Wide@3x.png';
import buildingImg from '../assets/static/hero-footer.png';

import { Container, Background, FormAuth, Anchor, AuthLogo, Presentation, Buildings } from '../assets/styles/Auth';

const Register = () => (
  <Container>
    <Background image={back}>
      <AuthLogo>
        <img src={logo} alt='Kiin' />
      </AuthLogo>
      <Presentation isFull>
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
    </Background>
    <FormAuth>
      <h1>Registrate</h1>
      <form>
        <h2>Nombre</h2>
        <input type='text' name='name' id='name' placeholder='Escribe tu nombre' />
        <h2>Username</h2>
        <input type='text' name='username' id='username' placeholder='Escribe tu username' />
        <h2>Correo</h2>
        <input type='email' name='email' id='email' placeholder='Escribe tu email' />
        <h2>Contraseña</h2>
        <input type='password' name='password' id='password' placeholder='Escribe tu contraseña' />
        <button type='submit'>Registrate</button>
      </form>
      <div>
        <Anchor href='hhtps://google.com'>
          <FaGoogle size={28} color='#CBD5E0' />
          Registrate con Google
        </Anchor>
        <Anchor href='https://twitter.com'>
          <FaTwitter size={28} color='#CBD5E0' />
          Registrate con Twitter
        </Anchor>
        <Anchor href='https://facebook.com'>
          <FaFacebook size={28} color='#CBD5E0' />
          Registrate con Facebook
        </Anchor>
      </div>
    </FormAuth>
  </Container>
);

export default Register;
