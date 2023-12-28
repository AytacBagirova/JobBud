import {
  WORK_SUBMIT_REQUEST,
  WORK_SUBMIT_SUCCESS,
  WORK_SUBMIT_FAIL,
  WORK_FILTER_REQUEST,
  WORK_FILTER_SUCCESS,
  GET_WORK_REQUEST,
  GET_WORK_SUCCESS,
  GET_WORK_FAIL,
} from '../../constants/WorkConstants';

export const workCompleteReducer = (state = {}, action) => {
  switch (action.type) {
    case WORK_SUBMIT_REQUEST:
      return { loading: true };
    case WORK_SUBMIT_SUCCESS:
      return { loading: false, work: action.payload };
    case WORK_SUBMIT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getMyWorksReducer = (state = {}, action) => {
  switch (action.type) {
    case WORK_FILTER_REQUEST:
      return { loading: true };
    case WORK_FILTER_SUCCESS:
      return { loading: false, works: action.payload };
    case WORK_SUBMIT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getWorkReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_WORK_REQUEST:
      return { loading: true };
    case GET_WORK_SUCCESS:
      return { loading: false, work: action.payload };
    case GET_WORK_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
