import * as types from "../../constants/JobConstants";
import { getWithAuth, postWithAuth } from "../../api/apiCalls";

export const createJobRequest = () => ({
  type: types.CREATE_JOB_REQUEST,
});

export const createJobSuccess = (data) => ({
  type: types.CREATE_JOB_SUCCESS,
  payload:data
});

export const createJobFailure = (error) => ({
  type: types.CREATE_JOB_FAILURE,
  payload: error,
});

export const createJob = (jobData) => async (dispatch,getState) => {
  try {
    dispatch(createJobRequest());
 const {
      userLogin: { userInfo },
    } = getState();
    const response = await postWithAuth("/api/v1.0/jobs ", {
      label: jobData.jobTitle,
      description: jobData.jobDescription,
      budget: jobData.jobBudget,
      deadline: jobData.jobDeadline_timestamp,
      ownerId:userInfo.id
    });

    dispatch(createJobSuccess(response.data));

    console.log("Job Created:", response.data);
  } catch (error) {
    dispatch(createJobFailure(error.message));
  }
};

export const getJobs= (searchQuery) => async (dispatch) => {
  try {
    dispatch({
      type: types.JOB_LIST_REQUEST,
    });

    const response = await getWithAuth('/api/v1.0/jobs/search',{query:searchQuery});
    const data = response.data;
    dispatch({
      type: types.JOB_LIST_SUCCESS,
      payload: [ ...data],
    });
  } catch (error) {
    dispatch({
      type: types.JOB_LIST_FAILURE,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};



