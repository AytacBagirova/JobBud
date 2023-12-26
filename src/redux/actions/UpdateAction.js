import { putWithAuth} from "../../api/apiCalls";
import {
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
} from "../../constants/UpdateConstants";

export const updateUser = (userData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_REQUEST,
    });

    const { userLogin: { userInfo } } = getState();
    console.log(userInfo);

    const response = await putWithAuth(`/api/v1.0/users/${userInfo.id}`, {
      id: userInfo.id,
      username: userData.username,
      email: userData.email,
      password: userData.password,
      userType: userData.userType,
    }, userInfo.accessToken);

    dispatch({
      type: USER_UPDATE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};