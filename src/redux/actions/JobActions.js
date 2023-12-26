import * as types from "../../constants/JobConstants";
import { postWithAuth } from "../../api/apiCalls";

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
    const response = await postWithAuth("/api/v1.0/jobs", {
      label: jobData.jobTitle,
      description: jobData.jobDescription,
      budget: jobData.jobBudget,
      deadline: jobData.jobDeadline_timestamp,
      ownerId:userInfo.id
    });
    // {jobTitle: 'asd', jobDescription: 'asd', jobBudget: 'asd'}


    dispatch(createJobSuccess(response.data));

    console.log("Job Created:", response.data);
  } catch (error) {
    dispatch(createJobFailure(error.message));
  }
};
