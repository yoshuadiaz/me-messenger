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

export const save = (state, _) => ({
  ...state,
  isSaving: true,
  hasSavingError: false,
});

export const saveSuccess = (state, { payload }) => ({
  ...state,
  isSaving: false,
  hasSavingError: false,
  data: payload,
});

export const saveFailure = (state, _) => ({
  ...state,
  isFetching: false,
  hasSavingError: true,
});
