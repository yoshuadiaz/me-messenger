import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/users';

import back from '../assets/static/backHero.png';

import { Container, Background, FormAuth, Anchor, Remember, Input } from '../assets/styles/Auth';
import { Link, Button } from '../assets/styles/GlobalStyles';

import AuthBackground from '../components/AuthBackground';
import AuthSocials from '../components/AuthSocials';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginUser(form, '/chats');
  };

  const handleRemenber = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Container>
      <Background image={back}>
        <AuthBackground isFull />
      </Background>
      <FormAuth>
        <h1>Iniciar sesion</h1>
        <form onSubmit={handleSubmit}>
          <h2>Correo</h2>
          <Input type='email' name='email' placeholder='Tu email' onChange={handleInput} required />
          <h2>Contraseña</h2>
          <Input type='password' name='password' placeholder='Tu contraseña' onChange={handleInput} required />
          <Remember>
            <input type="checkbox" id="remember" name="remember" onChange={handleRemenber} />
            Recordar sesion
          </Remember>
          <Anchor margin href='/remember-password'>¿Olvidaste tu contraseña?</Anchor>
          <Button type='submit'>Iniciar Sesion</Button>
        </form>
        <AuthSocials />
        <div>
          <h3>¿Aún no tienes una cuenta?</h3>
          <Link bgprimary='true' to='/register'>Registrate</Link>
        </div>
      </FormAuth>
    </Container>
  );
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(null, mapDispatchToProps)(Login);
