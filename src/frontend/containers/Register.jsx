import React from 'react';
import { FaTwitter, FaGoogle, FaFacebook } from 'react-icons/fa';

import back from '../assets/static/background.jpg';
import { Container, Background, FormAuth, Anchor } from '../assets/styles/Auth';

const Register = () => (
  <Container>
    <Background>
      <img src={back} alt="background" />
    </Background>
    <FormAuth>
      <h1>Registrate</h1>
      <form>
        <h2>Nombre</h2>
        <input type="text" name="name" id="name" placeholder="Escribe tu nombre" />
        <h2>Correo</h2>
        <input type="email" name="email" id="email" placeholder="Escribe tu email" />
        <h2>Contraseña</h2>
        <input type="password" name="password" id="password" placeholder="Escribe tu contraseña" />
        <button type="submit">Registrate</button>
      </form>
      <div>
        <Anchor href="hhtps://google.com">
          <FaGoogle size={28} color="#BBBBBB" />
          Registrate con Google
        </Anchor>
        <Anchor href="https://twitter.com">
          <FaTwitter size={28} color="#BBBBBB" />
          Registrate con Twitter
        </Anchor>
        <Anchor href="https://facebook.com">
          <FaFacebook size={28} color="#BBBBBB" />
          Registrate con Facebook
        </Anchor>
      </div>
    </FormAuth>
  </Container>
);

export default Register;
