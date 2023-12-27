import { getWithAuth } from "../../api/apiCalls";
import { WALLET_GET_BALANCE_FAIL, WALLET_GET_BALANCE_REQUEST, WALLET_GET_BALANCE_SUCCESS, WALLET_GET_HISTORY_REQUEST,WALLET_GET_HISTORY_SUCCESS,WALLET_GET_HISTORY_FAIL } from "../../constants/WalletConstants";

export const walletGetBalance =
  () => async (dispatch,getState) => {
    try {
      dispatch({
        type: WALLET_GET_BALANCE_REQUEST,
      });
        const { userLogin: { userInfo } } = getState();
      const response = await getWithAuth("/api/v1.0/wallets",{"userId":userInfo.id});
      dispatch({
        type: WALLET_GET_BALANCE_SUCCESS,
        payload: response.data,
      });
    
    } catch (error) {
      dispatch({
        type: WALLET_GET_BALANCE_FAIL,
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

export const getWalletHistory= (walletId) => async (dispatch) => {
  try {
    dispatch({
      type: WALLET_GET_HISTORY_REQUEST,
    });

    const response = await getWithAuth(`/api/v1.0/wallets/${walletId}/history`);
    const data = response.data;
    dispatch({
      type: WALLET_GET_HISTORY_SUCCESS,
      payload: [ ...data],
    });
  } catch (error) {
    dispatch({
      type: WALLET_GET_HISTORY_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};