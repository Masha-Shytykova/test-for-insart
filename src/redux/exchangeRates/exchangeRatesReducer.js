import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { getExchRates } from "./exchangeRatesOperations";

const exchRatesReducer = createReducer([], {
  [getExchRates.fulfilled]: (_, { payload }) => payload,
});

const isLoadingReducer = createReducer(false, {
  [getExchRates.pending]: () => true,
  [getExchRates.fulfilled]: () => false,
  [getExchRates.rejected]: () => false,
});

const setError = (_, { payload }) => payload;
const resetError = () => null;

const errorReducer = createReducer(null, {
  [getExchRates.pending]: resetError,
  [getExchRates.rejected]: setError,
});

const exchangeRatesReducers = combineReducers({
  exchRates: exchRatesReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export default exchangeRatesReducers;
