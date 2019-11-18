export const setUserPayload = (state, { payload: { token, email, name, id } }) => ({
  ...state,
  token,
  email,
  name,
  id,
});
