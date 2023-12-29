import {
  WORK_SUBMIT_REQUEST,
  WORK_SUBMIT_SUCCESS,
  WORK_SUBMIT_FAIL,
  WORK_FILTER_REQUEST,
  WORK_FILTER_SUCCESS,
  WORK_FILTER_FAIL,
  GET_WORK_REQUEST,
  GET_WORK_SUCCESS,
  GET_WORK_FAIL,
  WORK_CHANGE_STATUS_REQUEST,
  WORK_CHANGE_STATUS_SUCCESS,
  WORK_CHANGE_STATUS_FAIL,
} from '../../constants/WorkConstants';
import { getWithAuth, putWithAuth } from '../../api/apiCalls';

export const completeWorkAction = (workId, workContent) => async (dispatch) => {
  console.log('🚀 ~ file: WorkAction.js:15 ~ completeWorkAction ~ workId:', workId);
  console.log('🚀 ~ file: WorkAction.js:15 ~ completeWorkAction ~ workContent:', workContent);
  try {
    dispatch({ type: WORK_SUBMIT_REQUEST });
    const response = await putWithAuth(`/api/v1.0/works/${workId}`, {
      workContent,
    });
    const data = response.data;

    dispatch({
      type: WORK_SUBMIT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: WORK_SUBMIT_FAIL,
      payload:
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getMyWorks = (status) => async (dispatch, getState) => {
  try {
    dispatch({
      type: WORK_FILTER_REQUEST,
    });

    const response = await getWithAuth('/api/v1.0/works', {
      workStatus: status,
      userId: getState().userLogin.userInfo.id,
    });
    const data = response.data;
    dispatch({
      type: WORK_FILTER_SUCCESS,
      payload: [...data],
    });
  } catch (error) {
    dispatch({
      type: WORK_FILTER_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
export const getWorkAction = (jobId) => async (dispatch) => {
  try {
    dispatch({ type: GET_WORK_REQUEST });
    const response = await getWithAuth('/api/v1.0/works/detail', {
      jobId,
    });
    const data = response.data;

    dispatch({
      type: GET_WORK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_WORK_FAIL,
      payload:
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const workChangeStatus = (workId, newStatus) => async (dispatch) => {
  try {
    dispatch({
      type: WORK_CHANGE_STATUS_REQUEST,
    });

    const response = await putWithAuth(`/api/v1.0/works/${workId}/status`, {
      status: newStatus,
    });
    const data = response.data;

    dispatch({
      type: WORK_CHANGE_STATUS_SUCCESS,
      payload: {
        ...data,
      },
    });
  } catch (error) {
    dispatch({
      type: WORK_CHANGE_STATUS_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
