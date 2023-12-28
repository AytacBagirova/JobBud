import {
    WORK_SUBMIT_REQUEST,
    WORK_SUBMIT_SUCCESS,
    WORK_SUBMIT_FAIL,
  } from '../../constants/WorkConstants';
  
  export const workSubmitReducer = (state = {}, action) => {
    switch (action.type) {
      case WORK_SUBMIT_REQUEST:
        return { loading: true };
      case WORK_SUBMIT_SUCCESS:
        return { loading: false, success: true, work: action.payload };
      case WORK_SUBMIT_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };