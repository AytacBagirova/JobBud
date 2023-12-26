import * as types from '../../constants/JobConstants';
import { postWithAuth } from '../../api/apiCalls';

export const createJobRequest = () => ({
  type: types.CREATE_JOB_REQUEST,
});

export const createJobSuccess = () => ({
  type: types.CREATE_JOB_SUCCESS,
});

export const createJobFailure = (error) => ({
  type: types.CREATE_JOB_FAILURE,
  payload: error,
});

export const createJob = (jobData) => async (dispatch) => {
  try {
    dispatch(createJobRequest());

    const response = await postWithAuth('/api/v1.0/jobs', {
      ...jobData,
    });
    const data = response.data;
    console.log(data);
    // {jobTitle: 'asd', jobDescription: 'asd', jobBudget: 'asd'}
    const Data = {
      jobTitle: data.jobTitle,
      jobDescription: data.jobDescription,
      jobBudget: data.jobBudget,
    };

    dispatch(createJobSuccess());

    console.log('Job Created:', response.data);
  } catch (error) {
    dispatch(createJobFailure(error.message));
  }
};
