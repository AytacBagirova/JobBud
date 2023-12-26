import {
  YOUTUBE_REQUEST_FAILED,
  YOUTUBE_REQUEST_SENDING,
  YOUTUBE_REQUEST_SUCCESS,
} from '../../constants/YtApiConstants';

export const YtApiCodeReducer = (state = {}, action) => {
  switch (action.type) {
    case YOUTUBE_REQUEST_SENDING:
      return { loading: true };
    case YOUTUBE_REQUEST_SUCCESS:
      return { loading: false, channel: action.payload };
    case YOUTUBE_REQUEST_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
