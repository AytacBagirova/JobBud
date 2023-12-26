import * as types from '../../constants/JobConstants';


export const jobCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case types.CREATE_JOB_REQUEST:
      return {  loading: true };

    case types.CREATE_JOB_SUCCESS:
      return { loading: false, job:action.payload };

    case types.CREATE_JOB_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

