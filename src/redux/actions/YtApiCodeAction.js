import { postWithAuth, postWithoutAuth } from '../../api/apiCalls';
import {
  YOUTUBE_CHECK_REQUEST_SUCCESS,
  YOUTUBE_GET_CODE,
  YOUTUBE_GET_CODE_FAILED,
  YOUTUBE_GET_CODE_SUCCESS,
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
    const data = response.data.channelId
    console.log("🚀 ~ file: YtApiCodeAction.js:22 ~ findChannelId ~ data:", data)

    dispatch({
      type: YOUTUBE_REQUEST_SUCCESS,
      payload: data
    });

    localStorage.setItem('channelId', data);
  } catch (error) {
    dispatch({
      type: YOUTUBE_REQUEST_FAILED,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const saveCode = (code) => async (dispatch) => {
  try {
    dispatch({
      type: YOUTUBE_GET_CODE,
    });
    dispatch({
      type: YOUTUBE_GET_CODE_SUCCESS,
      payload: {
        code,
      },
    });

    localStorage.setItem('ytCode', code);
  } catch (error) {
    dispatch({
      type: YOUTUBE_GET_CODE_FAILED,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
