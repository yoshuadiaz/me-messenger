import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Conversation from '../containers/Conversation';
import Conversations from '../containers/Conversations';
import Profile from '../containers/Profile';
import NotFound from '../containers/NotFound';

const serverRoutes = (isLogged) => {
  return [
    {
      path: '/',
      component: Home,
      exact: true
    },
    {
      path: '/login',
      component: isLogged ? Conversations : Login,
      exact: true
    },
    {
      path: '/register',
      component: isLogged ? Profile : Register,
      exact: true
    },
    {
      path: '/chats',
      component: isLogged ? Conversations : Login,
      exact: true
    },
    {
      path: '/chats/:id',
      component: isLogged ? Conversation : Login,
      exact: true
    },
    {
      path: '/profile',
      component: isLogged ? Profile : Login,
      exact: true
    },
    {
      name: 'NotFound',
      component: NotFound,
    }
  ];
};

export default serverRoutes;
