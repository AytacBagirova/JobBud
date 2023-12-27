
import { WALLET_GET_BALANCE_FAIL, WALLET_GET_BALANCE_REQUEST, WALLET_GET_BALANCE_SUCCESS, WALLET_GET_HISTORY_FAIL, WALLET_GET_HISTORY_REQUEST, WALLET_GET_HISTORY_SUCCESS } from "../../constants/WalletConstants";

export const getWalletReducer = (state = {}, action) => {
  switch (action.type) {
    case WALLET_GET_BALANCE_REQUEST:
      return { loading: true };
    case WALLET_GET_BALANCE_SUCCESS:
      return { loading: false, wallet: action.payload };
    case WALLET_GET_BALANCE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const getWalletHistoryReducer = (state = {}, action) => {
  switch (action.type) {
    case WALLET_GET_HISTORY_REQUEST:
      return { loading: true };
    case WALLET_GET_HISTORY_SUCCESS:
      return { loading: false, walletHistory: action.payload };
    case WALLET_GET_HISTORY_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
