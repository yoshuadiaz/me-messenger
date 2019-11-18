import { handleActions } from 'redux-actions';
import { fetch, fetchSuccess, fetchFailure } from './mutations/fetch.mutations';

export const initialState = {
  isFetching: false,
  hasError: false,
  data: [],
};

const reducer = handleActions({
  'GET_MESSAGES_REQUEST': fetch,
  'GET_MESSAGES_SUCCESS': fetchSuccess,
  'GET_MESSAGES_FAILURE': fetchFailure,
}, initialState);

export default reducer;
