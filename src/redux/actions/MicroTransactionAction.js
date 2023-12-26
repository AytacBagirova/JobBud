import { postWithAuth } from '../../api/apiCalls';
import {
  MICRO_TRANSACTION_CREATE_FAIL,
  MICRO_TRANSACTION_CREATE_REQUEST,
  MICRO_TRANSACTION_CREATE_SUCCESS,
} from '../../constants/MicroTransactionconstants';

export const createMicroTransaction = (body) => async (dispatch) => {
  try {
    dispatch({
      type: MICRO_TRANSACTION_CREATE_REQUEST,
    });

    const response = await postWithAuth('/api/v1.0/microtransactions/create', {
      ...body,
    });
    const data = response.data;
    dispatch({
      type: MICRO_TRANSACTION_CREATE_SUCCESS,
      payload: {
        ...data,
      },
    });
  } catch (error) {
    dispatch({
      type: MICRO_TRANSACTION_CREATE_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
