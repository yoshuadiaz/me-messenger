export const setUserPayload = (state, { payload: { email, name, id } }) => ({
  ...state,
  email,
  name,
  id,
});
