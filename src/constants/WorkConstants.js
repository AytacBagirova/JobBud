export const WORK_SUBMIT_REQUEST = 'WORK_SUBMIT_REQUEST';
export const WORK_SUBMIT_SUCCESS = 'WORK_SUBMIT_SUCCESS';
export const WORK_SUBMIT_FAIL = 'WORK_SUBMIT_FAIL';

export const WORK_FILTER_REQUEST = 'WORK_FILTER_REQUEST';
export const WORK_FILTER_SUCCESS = 'WORK_FILTER_SUCCESS';
export const WORK_FILTER_FAIL = 'WORK_FILTER_FAIL';


export const GET_WORK_REQUEST = 'GET_WORK_REQUEST';
export const GET_WORK_SUCCESS = 'GET_WORK_SUCCESS';
export const GET_WORK_FAIL = 'GET_WORK_FAIL';


export const WORK_CHANGE_STATUS_REQUEST = 'WORK_CHANGE_STATUS_REQUEST';
export const WORK_CHANGE_STATUS_SUCCESS = 'WORK_CHANGE_STATUS_SUCCESS';
export const WORK_CHANGE_STATUS_FAIL = 'WORK_CHANGE_STATUS_FAIL';


export const workChangeStatusReducer = (state = {}, action) => {
  switch (action.type) {
    case WORK_CHANGE_STATUS_REQUEST:
      return { loading: true };

    case WORK_CHANGE_STATUS_SUCCESS:
      return { loading: false, work: action.payload };

    case WORK_CHANGE_STATUS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};