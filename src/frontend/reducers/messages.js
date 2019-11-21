import { handleActions } from 'redux-actions';
import {
  fetch,
  fetchSuccess,
  fetchFailure,
  save,
  saveSuccess,
  saveFailure,
} from './mutations/fetch.mutations';

export const initialState = {
  isFetching: false,
  isSaving: false,
  hasSavingError: false,
  hasError: false,
  data: [],
};

const reducer = handleActions({
  'GET_MESSAGES_REQUEST': fetch,
  'GET_MESSAGES_SUCCESS': fetchSuccess,
  'GET_MESSAGES_FAILURE': fetchFailure,
  'SAVE_MESSAGES_REQUEST': save,
  'SAVE_MESSAGES_SUCCESS': saveSuccess,
  'SAVE_MESSAGES_FAILURE': saveFailure,
}, initialState);

export default reducer;
