import axios from 'axios';
import { getActualConversation } from './actualConversation';
// import { newMessage } from '../utils/socket';

export const saveMessage = (payload) => {
  return (dispatch) => {
    axios({
      url: '/messages',
      method: 'post',
      data: payload,
    })
      .then(() => {
        // newMessage((data) => {
        //   console.log(data);
        // });
        getActualConversation(payload.inChat)(dispatch);
      })
      .catch((err) => console.error(err));
  };
};
