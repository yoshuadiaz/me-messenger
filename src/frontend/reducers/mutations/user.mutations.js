export const setUserPayload = (state, { payload: { token, email, name, id } }) => ({
  ...state,
  token,
  email,
  name,
  id,
});

export const fetch = (state, _) => ({
  ...state,
  isFetching: true,
  hasError: false,
});

export const fetchSuccess = (state, { payload }) => ({
  ...state,
  isFetching: false,
  hasError: false,
  isLoged: !!payload.id,
  data: payload,
});

export const fetchFailure = (state, _) => ({
  ...state,
  isFetching: false,
  hasError: true,
  isLoged: false,
});
