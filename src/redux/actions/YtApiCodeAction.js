import { postWithAuth, postWithoutAuth } from "../../api/apiCalls";
import {
  YOUTUBE_REQUEST_FAILED,
  YOUTUBE_REQUEST_SENDING,
  YOUTUBE_REQUEST_SUCCESS,
} from "../../constants/YtApiConstants";

export const ytApiCodeProcess = (code) => async (dispatch) => {
  try {
    dispatch({
      type: YOUTUBE_REQUEST_SENDING,
    });

    const response = await postWithAuth(
      "/api/v1.0/microtransactions/findChannelId",
      {
        code: code,
      }
    );
    const data = response.data;
      const body = data.channelId;
    dispatch({
      type: YOUTUBE_REQUEST_SUCCESS,
      payload: {
        ...body,
      },
    });

    localStorage.setItem("channelId", body);
  } catch (error) {
    dispatch({
      type: YOUTUBE_REQUEST_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
