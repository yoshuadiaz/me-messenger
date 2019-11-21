import { handleActions } from 'redux-actions';
import { fetch, fetchSuccess, fetchFailure } from './mutations/fetch.mutations';
import { actionTypes as actions } from '../actions/actualConversation';

export const initialState = {
  isFetching: false,
  hasError: false,
  data: [],
};

const reducer = handleActions({
  [actions.GET_ACTUAL_CONVERSATION_REQUEST]: fetch,
  [actions.GET_ACTUAL_CONVERSATION_SUCCESS]: fetchSuccess,
  [actions.GET_ACTUAL_CONVERSATION_FAILURE]: fetchFailure,
}, initialState);

export default reducer;
