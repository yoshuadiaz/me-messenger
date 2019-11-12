import React from 'react';
import { FaTwitter, FaGoogle, FaFacebook } from 'react-icons/fa';

import back from '../assets/static/background.jpg';
import { Container, Background, FormAuth, Anchor, Link } from '../assets/styles/Auth';

const Login = () => (
  <Container>
    <Background>
      <img src={back} alt='background' />
    </Background>
    <FormAuth>
      <h1>Iniciar sesion</h1>
      <form>
        <h2>Correo</h2>
        <input type='email' name='email' id='email' placeholder='Tu email' />
        <h2>Contraseña</h2>
        <input type='password' name='password' id='password' placeholder='Tu contraseña' />
        <Link to='/remember-password'>¿Olvidaste tu contraseña?</Link>
        <button type='submit'>Iniciar Sesion</button>
      </form>
      <div>
        <Anchor href='hhtps://google.com'>
          <FaGoogle size={28} color='#BBBBBB' />
          Iniciar sesion con Google
        </Anchor>
        <Anchor href='https://twitter.com'>
          <FaTwitter size={28} color='#BBBBBB' />
          Iniciar sesion con Twitter
        </Anchor>
        <Anchor href='https://facebook.com'>
          <FaFacebook size={28} color='#BBBBBB' />
          Iniciar sesion con Facebook
        </Anchor>
      </div>
      <div>
        <h3>¿Aún no tienes una cuenta?</h3>
        <Link btnregister='true' to='/register'>Registrate</Link>
      </div>
    </FormAuth>
  </Container>
);

export default Login;
