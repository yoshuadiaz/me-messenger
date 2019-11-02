import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Conversation from '../containers/Conversation';
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
      component: Login,
      exact: true
    },
    {
      path: '/register',
      component: Register,
      exact: true
    },
    {
      path: '/chats/:id',
      component: Conversation,
      exact: true
    },
    {
      name: 'NotFound',
      component: NotFound,
    }
  ];
};

export default serverRoutes;