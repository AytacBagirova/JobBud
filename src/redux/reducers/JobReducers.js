import * as types from '../../constants/JobConstants';

const initialState = {
  loading: false,
  error: null,
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_JOB_REQUEST:
      return { ...state, loading: true, error: null };

    case types.CREATE_JOB_SUCCESS:
      return { ...state, loading: false };

    case types.CREATE_JOB_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default jobReducer;