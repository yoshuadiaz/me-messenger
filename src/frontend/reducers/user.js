import { handleActions } from 'redux-actions';
import authActions from '../actions/users';
import { setUserPayload } from './mutations/user.mutations';

export const initialState = {
  isFetching: false,
  hasError: false,
  isLoged: false,
  data: null,
};

const reducer = handleActions({
  [authActions.LOGIN_REQUEST]: setUserPayload,
  [authActions.LOGIN_REQUEST]: setUserPayload,
  [authActions.REGISTER_REQUEST]: setUserPayload,
}, initialState);

export default reducer;
