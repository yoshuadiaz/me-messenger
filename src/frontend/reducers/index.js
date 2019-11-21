import { combineReducers } from 'redux';
import user from './user';
import messages from './messages';
import conversations from './conversation';
import actualConversation from './actualConversation';

export default combineReducers({
  user,
  messages,
  conversations,
  actualConversation,
});
