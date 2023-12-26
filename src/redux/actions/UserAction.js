import { postWithoutAuth, putWithAuth } from "../../api/apiCalls";

import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
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
    const { userId, accessToken, refreshToken, userType, email } = data;
    const body = {
      id: userId,
      accessToken,
      refreshToken,
      userType,
      email,
      username,
    };
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: body,
    });

    

    

    localStorage.setItem('userInfo', JSON.stringify(body));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error.response?.data?.message ?? error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  if (localStorage.getItem("channelId")) {
     localStorage.removeItem("channelId");
   }
  dispatch({
    type: USER_LOGOUT,
  });
};

export const register =
  (username, email, password, userType) => async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });
      const data = await postWithoutAuth("/api/v1.0/auth/register", {
        username: username,
        email: email,
        password: password,
        userType: userType,
      });
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data.data,
      });
      localStorage.setItem("userInfo", JSON.stringify(data.data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const updateUser = (userData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    console.log(userInfo);

    const response = await putWithAuth(
      `/api/v1.0/users/${userInfo.id}`,
      {
        username: userData.username,
        email: userData.email,
      }
    );

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
