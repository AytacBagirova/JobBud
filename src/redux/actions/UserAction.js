import { postWithoutAuth } from "../../api/apiCalls";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "../../constants/UserConstants";

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const response = await postWithoutAuth("/api/v1.0/auth", {
      username: username,
      password: password,
    });
      const data = response.data;
      const body={
        id: data.userId,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        userType: data.userType,
        email: data.email,
        username: data.username,
      }
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: {
       ...body
      },
    });

    localStorage.setItem("userInfo", JSON.stringify(body));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({
    type: USER_LOGOUT,
  });
};
