import { handleActions } from 'redux-actions';
import { fetch, fetchSuccess, fetchFailure } from './mutations/fetch.mutations';

export const initialState = {
  isFetching: false,
  hasError: false,
  data: [],
};

const reducer = handleActions({
  'GET_CONVERSATIONS_REQUEST': fetch,
  'GET_CONVERSATIONS_SUCCESS': fetchSuccess,
  'GET_CONVERSATIONS_FAILURE': fetchFailure,
}, initialState);

export default reducer;
