import axios from 'axios';
import { createActions } from 'redux-actions';

const actionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGOUT_REQUEST: 'LOGOUT_REQUEST',
  SET_ERROR: 'SET_ERROR',
  REGISTER_REQUEST: 'REGISTER_REQUEST',
};

const actionCreator = createActions({},
  Object.values(actionTypes).toString());

export const {
  loginRequest,
  logoutRequest,
  setError,
  registerRequest,
} = actionCreator;

export const registerUser = (payload, redirecUrl) => {
  return (dispatch) => {
    axios.post('/auth/sign-up', payload)
      .then(({ data }) => dispatch(registerRequest(data)))
      .then(() => {
        window.location.href = redirecUrl;
      })
      .catch((err) => dispatch(setError(err)));
  };
};

export const loginUser = ({ email, password }, redirecUrl) => {
  return (dispatch) => {
    axios({
      url: '/auth/sign-in',
      method: 'post',
      auth: {
        username: email,
        password,
      },
    })
      .then(({ data }) => {
        document.cookie = `email=${data.email}`;
        document.cookie = `name=${data.name}`;
        document.cookie = `id=${data.id}`;
        dispatch(loginRequest(data));
      })
      .then(() => {
        window.location.href = redirecUrl;
      })
      .catch((err) => dispatch(setError(err)));
  };
};

export default actionTypes;
