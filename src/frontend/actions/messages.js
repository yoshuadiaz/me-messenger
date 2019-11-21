import axios from 'axios';
import { getActualConversation } from './actualConversation';

export const saveMessage = (payload) => {
  return (dispatch) => {
    axios({
      url: '/messages',
      method: 'post',
      data: payload,
    })
      .then(() => {
        getActualConversation(payload.inChat)(dispatch);
      })
      .catch((err) => console.error(err));
  };
};
