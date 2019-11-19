import { handleActions } from 'redux-actions';
import { setUserPayload } from './mutations/user.mutations';

export const initialState = {
  isFetching: false,
  hasError: false,
  isLoged: false,
  data: {},
};

const reducer = handleActions({
  'LOGIN_REQUEST': setUserPayload,
  'LOGOUT_REQUEST': setUserPayload,
  'REGISTER_REQUEST': setUserPayload,
}, initialState);

export default reducer;
