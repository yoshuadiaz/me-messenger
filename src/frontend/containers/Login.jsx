import React from 'react';
import { FaTwitter, FaGoogle, FaFacebook } from 'react-icons/fa';

import back from '../assets/static/backHero.png';
import logo from '../assets/static/Logo_Wide@3x.png';
import buildingImg from '../assets/static/hero-footer.png';

import { Container, Background, FormAuth, Anchor, AuthLogo, Link, Presentation, Buildings } from '../assets/styles/Auth';

const Login = () => (
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
          <FaGoogle size={28} color='#CBD5E0' />
          Iniciar sesion con Google
        </Anchor>
        <Anchor href='https://twitter.com'>
          <FaTwitter size={28} color='#CBD5E0' />
          Iniciar sesion con Twitter
        </Anchor>
        <Anchor href='https://facebook.com'>
          <FaFacebook size={28} color='#CBD5E0' />
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
