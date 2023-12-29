import { applyMiddleware, combineReducers, createStore, compose } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import { completeMicroTransaction } from './actions/MicroTransactionAction';
import {
  jobCreateReducer,
  jobListReducer,
  jobDetailsReducer,
  myJobListReducer,
} from './reducers/JobReducer';
import {
  MicroTransactionCompleteReducer,
  MicroTransactionCreateReducer,
  MicroTransactionListReducer,
  MicroTransactionSingleReducer,
} from './reducers/MicroTransactionReducer';
import {
  offerChangeStatusReducer,
  offerCreateReducer,
  offerListReducer,
  offerSpesificListReducer,
} from './reducers/OfferReducer';
import { UserReducer, UserRegisterReducer } from './reducers/UserReducer';
import { getWalletReducer, getWalletHistoryReducer } from './reducers/WalletReducer';
import { findChannelReducer, saveCodeReducer } from './reducers/YtApiCodeReducer';
import { getMyWorksReducer, getWorkReducer, workCompleteReducer } from './reducers/WorkReducer';
import { getWorkAction } from './actions/WorkAction';
import { workChangeStatusReducer } from '../constants/WorkConstants';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);

const rootReducer = combineReducers({
  userLogin: UserReducer,
  ytApiChannel: findChannelReducer,
  microTransactionCreate: MicroTransactionCreateReducer,
  userRegister: UserRegisterReducer,
  jobCreate: jobCreateReducer,
  microTransactionList: MicroTransactionListReducer,
  walletDetails: getWalletReducer,
  walletTransactions: getWalletHistoryReducer,
  jobList: jobListReducer,
  jobDetails: jobDetailsReducer,
  offerList: offerListReducer,
  offerCreate: offerCreateReducer,
  ytApiCode: saveCodeReducer,
  microTransactionSingle: MicroTransactionSingleReducer,
  completeMicroTransaction: MicroTransactionCompleteReducer,
  workComplete: workCompleteReducer,
  myJobList: myJobListReducer,
  myWorkList: getMyWorksReducer,
  spesificOfferList: offerSpesificListReducer,
  workDetail: getWorkReducer,
  offerChangeStatus: offerChangeStatusReducer,
  workChangeStatus: workChangeStatusReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const ytChannelFromStorage = localStorage.getItem('channelId')
  ? localStorage.getItem('channelId')
  : '';

const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage,
  },
  ytApiCode: { channel: ytChannelFromStorage },
};
export const store = createStore(rootReducer, initialState, enhancer);
