import { handleActions } from 'redux-actions';
import { fetch, fetchSuccess, fetchFailure, save, saveSuccess, saveFailure } from './mutations/fetch.mutations';

export const initialState = {
  isFetching: false,
  hasError: false,
  data: [],
  isSaving: false,
  hasSavingError: false,
  savedData: null,
};

const reducer = handleActions({
  'GET_CONVERSATIONS_REQUEST': fetch,
  'GET_CONVERSATIONS_SUCCESS': fetchSuccess,
  'GET_CONVERSATIONS_FAILURE': fetchFailure,
  'SAVE_CONVERSATION_REQUEST': save,
  'SAVE_CONVERSATION_SUCCESS': saveSuccess,
  'SAVE_CONVERSATION_FAILURE': saveFailure,
}, initialState);

export default reducer;
