import { postWithAuth, postWithoutAuth } from '../../api/apiCalls';
import {
  YOUTUBE_CHECK_REQUEST_SUCCESS,
  YOUTUBE_REQUEST_FAILED,
  YOUTUBE_REQUEST_SENDING,
  YOUTUBE_REQUEST_SUCCESS,
} from '../../constants/YtApiConstants';

export const findChannelId = (code) => async (dispatch) => {
  try {
    dispatch({
      type: YOUTUBE_REQUEST_SENDING,
    });

    const response = await postWithAuth('/api/v1.0/microtransactions/findChannelId', {
      code: code,
    });
    const data = response.data;
    const body = data.channelId;
    dispatch({
      type: YOUTUBE_REQUEST_SUCCESS,
      payload: {
        ...body,
      },
    });

    localStorage.setItem('channelId', body);
  } catch (error) {
    dispatch({
      type: YOUTUBE_REQUEST_FAILED,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const processCode = (code) => async (dispatch) => {
 try {
    dispatch({
      type: YOUTUBE_REQUEST_SENDING,
    });
    dispatch({
      type: YOUTUBE_REQUEST_SUCCESS,
      payload: {
        code,
      },
    });

    localStorage.setItem('ytCode', code);
  } catch (error) {
    dispatch({
      type: YOUTUBE_REQUEST_FAILED,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
}

export const completeMicroTransaction = (code,microTransactionId) => async (dispatch,getState) => {
  try {
    dispatch({
      type: YOUTUBE_CHECK_REQUEST_SENDING,
    });
    const { userLogin } = getState();
    const response = await postWithAuth('/api/v1.0/microtransactions/completeMicroTransaction', {
      code: code,
      freelancerId: userLogin.userInfo.id,
      microTransactionId
    });
    const data = response.data;
    const body = data.channelId;
    dispatch({
      type: YOUTUBE_CHECK_REQUEST_SUCCESS,
      payload: {
        ...body,
      },
    });
  } catch (error) {
    dispatch({
      type: YOUTUBE_CHECK_REQUEST_FAILED,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
