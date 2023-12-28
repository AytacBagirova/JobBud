import {
  MICRO_TRANSACTION_COMPLETE_FAIL,
  MICRO_TRANSACTION_COMPLETE_REQUEST,
  MICRO_TRANSACTION_COMPLETE_SUCCESS,
  MICRO_TRANSACTION_CREATE_FAIL,
  MICRO_TRANSACTION_CREATE_REQUEST,
  MICRO_TRANSACTION_CREATE_SUCCESS,
  MICRO_TRANSACTION_GET_SINGLE_FAIL,
  MICRO_TRANSACTION_GET_SINGLE_REQUEST,
  MICRO_TRANSACTION_GET_SINGLE_SUCCESS,
  MICRO_TRANSACTION_LIST_FAIL,
  MICRO_TRANSACTION_LIST_REQUEST,
  MICRO_TRANSACTION_LIST_SUCCESS,
} from '../../constants/MicroTransactionconstants';

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

export const MicroTransactionListReducer = (state = {microtransactions:[]}, action) => {
  switch (action.type) {
    case MICRO_TRANSACTION_LIST_REQUEST:
      return { loading: true };
    case MICRO_TRANSACTION_LIST_SUCCESS:
      return { loading: false, microtransactions: action.payload };
    case MICRO_TRANSACTION_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};


export const MicroTransactionSingleReducer = (state = {}, action) => {
  switch (action.type) {
    case MICRO_TRANSACTION_GET_SINGLE_REQUEST:
      return { loading: true };
    case MICRO_TRANSACTION_GET_SINGLE_SUCCESS:
      return { loading: false, microtransaction: action.payload };
    case MICRO_TRANSACTION_GET_SINGLE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export const MicroTransactionCompleteReducer = (state = {}, action) => {
  switch (action.type) {
    case MICRO_TRANSACTION_COMPLETE_REQUEST:
      return { loading: true };
    case MICRO_TRANSACTION_COMPLETE_SUCCESS:
      return { loading: false, microtransaction: action.payload };
    case MICRO_TRANSACTION_COMPLETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
