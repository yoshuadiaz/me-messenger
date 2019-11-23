export const setUserPayload = (state, { payload: { email, name, id, token } }) => ({
  ...state,
  email,
  name,
  id,
  token,
});
