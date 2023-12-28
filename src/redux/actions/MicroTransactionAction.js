import { getWithAuth, postWithAuth } from '../../api/apiCalls';
import {
  MICRO_TRANSACTION_COMPLETE_FAIL,
  MICRO_TRANSACTION_COMPLETE_REQUEST,
  MICRO_TRANSACTION_COMPLETE_SUCCESS,
  MICRO_TRANSACTION_CREATE_FAIL,
  MICRO_TRANSACTION_CREATE_REQUEST,
  MICRO_TRANSACTION_CREATE_SUCCESS,
  MICRO_TRANSACTION_GET_SINGLE_FAIL,
  MICRO_TRANSACTION_GET_SINGLE_SUCCESS,
  MICRO_TRANSACTION_LIST_FAIL,
  MICRO_TRANSACTION_LIST_REQUEST,
  MICRO_TRANSACTION_LIST_SUCCESS,
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
export const getMicroTransactions =
  (ownerId = null) =>
  async (dispatch) => {
    try {
      dispatch({
        type: MICRO_TRANSACTION_LIST_REQUEST,
      });

      let response = null;
      if (ownerId != null) response = await getWithAuth('/api/v1.0/microtransactions', { ownerId });
      else response = await getWithAuth('/api/v1.0/microtransactions');
      const data = response.data;
      dispatch({
        type: MICRO_TRANSACTION_LIST_SUCCESS,
        payload: [...data],
      });
    } catch (error) {
      dispatch({
        type: MICRO_TRANSACTION_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
export const getMicroTransaction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: MICRO_TRANSACTION_GET_SINGLE_FAIL,
    });

    const response = await getWithAuth(`/api/v1.0/microtransactions/${id}`);
    const data = response.data;
    dispatch({
      type: MICRO_TRANSACTION_GET_SINGLE_SUCCESS,
      payload: { ...data },
    });
  } catch (error) {
    dispatch({
      type: MICRO_TRANSACTION_GET_SINGLE_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const completeMicroTransaction =
  (code, microTransactionId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: MICRO_TRANSACTION_COMPLETE_REQUEST,
      });
      const { userLogin } = getState();
      const response = await postWithAuth('/api/v1.0/microtransactions/complete', {
        code: code,
        freelancerId: userLogin.userInfo.id,
        microTransactionId,
      });
      const data = response.data;
      dispatch({
        type: MICRO_TRANSACTION_COMPLETE_SUCCESS,
        payload: {
          data,
        },
      });
    } catch (error) {
      dispatch({
        type: MICRO_TRANSACTION_COMPLETE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
