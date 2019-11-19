import React from 'react';
import { FaTwitter, FaGoogle, FaFacebook } from 'react-icons/fa';

import { Anchor } from '../assets/styles/Auth';

const AuthSocials = ({ registro }) => (
  <div>
    <Anchor href='/auth/google-oauth'>
      <FaGoogle size={28} color='#50BDBE' />
      {registro ? 'Registrarse ' : 'Iniciar sesion '}
      con Google
    </Anchor>
    <Anchor href='/auth/twitter'>
      <FaTwitter size={28} color='#50BDBE' />
      {registro ? 'Registrarse ' : 'Iniciar sesion '}
      con Twitter
    </Anchor>
    <Anchor href='https://facebook.com'>
      <FaFacebook size={28} color='#50BDBE' />
      {registro ? 'Registrarse ' : 'Iniciar sesion '}
      con Facebook
    </Anchor>
  </div>
);

export default AuthSocials;
