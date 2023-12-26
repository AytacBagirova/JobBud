import { postWithoutAuth } from '../../api/apiCalls';
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../../constants/UserConstants';

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const { data } = await postWithoutAuth('/api/v1.0/auth', {
      username,
      password,
    });

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
  localStorage.removeItem('userInfo');
  dispatch({
    type: USER_LOGOUT,
  });
};

export const register = (username, email, password, userType) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });
    const data = await postWithoutAuth('/api/v1.0/auth/register', {
      username,
      email,
      password,
      userType,
    });
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data.data,
    });
    localStorage.setItem('userInfo', JSON.stringify(data.data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response?.data?.detail ?? error.message,
    });
  }
};
