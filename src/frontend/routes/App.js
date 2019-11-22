import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Conversation from '../containers/Conversation';
import Conversations from '../containers/Conversations';
import Profile from '../containers/Profile';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import { GlobalStyles } from '../assets/styles/GlobalStyles';

const App = ({ isLogged }) => (
  <>
    <GlobalStyles />
    <BrowserRouter>
      <Layout isLogged={isLogged}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={isLogged ? Conversations : Login} />
          <Route exact path='/register' component={isLogged ? Profile : Register} />
          <Route exact path='/chats' component={isLogged ? Conversation : Login} />
          <Route exact path='/profile' component={isLogged ? Profile : Login} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </>
);

export default App;
