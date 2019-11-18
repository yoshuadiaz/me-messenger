export const fetch = (state, _) => ({
  ...state,
  isFetching: true,
  hasError: false,
});

export const fetchSuccess = (state, { payload }) => ({
  ...state,
  isFetching: false,
  hasError: false,
  data: payload,
});

export const fetchFailure = (state, _) => ({
  ...state,
  isFetching: false,
  hasError: true,
});
