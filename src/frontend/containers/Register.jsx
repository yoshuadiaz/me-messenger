import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../actions/users';

import back from '../assets/static/backHero.png';

import { Container, Background, FormAuth, Input } from '../assets/styles/Auth';
import { Button } from '../assets/styles/GlobalStyles';

import AuthBackground from '../components/AuthBackground';
import AuthSocials from '../components/AuthSocials';

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerUser(form, '/login');
  };

  return (
    <Container>
      <Background image={back}>
        <AuthBackground isFull />
      </Background>
      <FormAuth autocomplete='off'>
        <h1>Registrate</h1>
        <form onSubmit={handleSubmit}>
          <h2>Nombre</h2>
          <Input type='text' name='name' placeholder="Escribe tu nombre" onChange={handleInput} required autocomplete='off' />
          <h2>Correo</h2>
          <Input type='email' name='email' placeholder='Escribe tu email' onChange={handleInput} required autocomplete='off' />
          <h2>Contraseña</h2>
          <Input type='password' name='password' placeholder='Escribe tu contraseña' onChange={handleInput} required autocomplete='off' />
          <Button type='submit'>Registrate</Button>
        </form>
        <AuthSocials registro />
      </FormAuth>
    </Container>
  );
};

const mapDispatchToProps = {
  registerUser,
};

export default connect(null, mapDispatchToProps)(Register);
