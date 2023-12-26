import { USER_REGISTER_FAIL } from "../../constants/UserConstants";
import { WALLET_GET_BALANCE_REQUEST, WALLET_GET_BALANCE_SUCCESS } from "../../constants/WalletConstants";

export const getWalletReducer = (state = {}, action) => {
  switch (action.type) {
    case WALLET_GET_BALANCE_REQUEST:
      return { loading: true };
    case WALLET_GET_BALANCE_SUCCESS:
      return { loading: false, wallet: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
