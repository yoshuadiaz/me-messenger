import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Conversation from '../containers/Conversation';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import { GlobalStyles } from '../assets/styles/GlobalStyles';

const App = ({ isLogged }) => (
  <>
    <GlobalStyles />
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/chats' component={Conversation} />
          <Route exact path='/chats/:id' component={Conversation} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </>
);

export default App;
