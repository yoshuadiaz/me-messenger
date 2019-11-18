import { combineReducers } from 'redux';
import user from './user';
import messages from './messages';
import conversations from './conversation';

export default combineReducers({ user, messages, conversations });
