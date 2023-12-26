
import { applyMiddleware, combineReducers, createStore, compose } from "@reduxjs/toolkit";

import { thunk } from "redux-thunk";
import { ytApiCodeProcess } from "./actions/YtApiCodeAction";
import { MicroTransactionCreateReducer } from "./reducers/MicroTransactionReducer";
import { UserReducer, UserRegisterReducer } from "./reducers/UserReducer";
import { YtApiCodeReducer } from "./reducers/YtApiCodeReducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
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
  ytApiCode: YtApiCodeReducer,
  microTransaction_Create: MicroTransactionCreateReducer,
  userRegister: UserRegisterReducer
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const ytChannelFromStorage = localStorage.getItem("channelId")
  ? localStorage.getItem("channelId")
  : null;

const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage,
  },
  ytApiCode: { channel: ytChannelFromStorage },
};
export const store = createStore(rootReducer, initialState, enhancer);
