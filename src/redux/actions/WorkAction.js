import {
  WORK_SUBMIT_REQUEST,
  WORK_SUBMIT_SUCCESS,
  WORK_SUBMIT_FAIL,
} from '../../constants/WorkConstants';
import { putWithAuth } from '../../api/apiCalls';

export const submitWork = (submitData) => async (dispatch) => {
  try {
    dispatch({ type: WORK_SUBMIT_REQUEST });
    const response = await putWithAuth(
      `/api/v1.0/works/${submitData.workId}`,
      { 
        workContent: submitData.workContent,
        completedDate: submitData.completedDate
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
  }};