import axios from 'axios';

export const actionTypes = {
  'GET_CONVERSATIONS_REQUEST': 'GET_CONVERSATIONS_REQUEST',
  'GET_CONVERSATIONS_SUCCESS': 'GET_CONVERSATIONS_SUCCESS',
  'GET_CONVERSATIONS_FAILURE': 'GET_CONVERSATIONS_FAILURE',
  'SAVE_CONVERSATION_REQUEST': 'SAVE_CONVERSATION_REQUEST',
  'SAVE_CONVERSATION_SUCCESS': 'SAVE_CONVERSATION_SUCCESS',
  'SAVE_CONVERSATION_FAILURE': 'SAVE_CONVERSATION_FAILURE',
};

export const saveConversationRequest = () => ({
  type: actionTypes.SAVE_CONVERSATION_REQUEST,
});

export const saveConversationSuccess = (payload) => ({
  type: actionTypes.SAVE_CONVERSATION_SUCCESS,
  payload,
});

export const saveConversationFailure = (payload) => ({
  type: actionTypes.SAVE_CONVERSATION_FAILURE,
  payload,
});

export const createChat = (payload, toggleModal) => {
  return (dispatch) => {
    dispatch(saveConversationRequest());
    axios({
      url: '/chats/user',
      method: 'post',
      data: {
        chat: payload,
      },
    })
      .then(({ data }) => {
        dispatch(saveConversationSuccess(data));
        toggleModal();
      })
      .catch((err) => {
        dispatch(saveConversationFailure(err));
      });
  };
};
