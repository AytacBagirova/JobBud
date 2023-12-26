import { MICRO_TRANSACTION_CREATE_FAIL, MICRO_TRANSACTION_CREATE_REQUEST, MICRO_TRANSACTION_CREATE_SUCCESS } from "../../constants/MicroTransactionconstants";

export const MicroTransactionCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case MICRO_TRANSACTION_CREATE_REQUEST:
      return { loading: true };
    case MICRO_TRANSACTION_CREATE_SUCCESS:
      return { loading: false, microtransaction: action.payload };
    case MICRO_TRANSACTION_CREATE_FAIL:
      return { loading: false, error: action.payload };
   
    default:
      return state;
  }
};
