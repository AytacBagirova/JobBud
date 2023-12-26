import { applyMiddleware, combineReducers, createStore,compose } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { UserReducer } from "./reducers/UserReducer";

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
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage,
  },
};
export const store = createStore(
  rootReducer,
  initialState,
 enhancer
);
