import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import * as actions from "./requestCounterActions";

const reqCounterReducer = createReducer(0, {
  //[actions.increaseRequestCounter]: (state, { payload }) => (state += 1),
  [actions.increaseRequestCounter]: (state, { payload }) =>
    state === 5 ? 1 : (state += 1),
});

export const requestCounterReducer = combineReducers({
  requestCounter: reqCounterReducer,
});
