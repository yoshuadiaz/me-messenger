import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Home</h1>
    <Link to="/chats/1">
      Conversation
    </Link>
    <Link to="/login">
      Iniciar sesion
    </Link>
    <Link to="/register">
      Registrate
    </Link>
  </div>
);

export default Home;
