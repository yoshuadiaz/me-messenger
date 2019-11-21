import axios from 'axios';

export const actionTypes = {
  GET_ACTUAL_CONVERSATION_REQUEST: 'GET_ACTUAL_CONVERSATION_REQUEST',
  GET_ACTUAL_CONVERSATION_SUCCESS: 'GET_ACTUAL_CONVERSATION_SUCCESS',
  GET_ACTUAL_CONVERSATION_FAILURE: 'GET_ACTUAL_CONVERSATION_FAILURE',
};

export const getActualConversationRequest = () => ({
  type: actionTypes.GET_ACTUAL_CONVERSATION_REQUEST,
});

export const getActualConversationSuccess = (payload) => ({
  type: actionTypes.GET_ACTUAL_CONVERSATION_SUCCESS,
  payload,
});

export const getActualConversationFailure = (payload) => ({
  type: actionTypes.GET_ACTUAL_CONVERSATION_FAILURE,
  payload,
});

export const getActualConversation = (payload) => {
  return (dispatch) => {
    dispatch(getActualConversationRequest());
    axios.get(`/chats/${payload}`)
      .then(({ data }) => {
        return axios.get(`/messages/chat/${data._id}`)
          .then((res) => ({ ...data, messages: res.data }));
      })
      .then((data) => {
        dispatch(getActualConversationSuccess(data));
      }).catch(() => {
        dispatch(getActualConversationFailure());
      });
  };
};
