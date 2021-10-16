import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { requestCounterReducer } from "./requestCounter/requestCounterReducer";
import exchangeRatesReducers from "./exchangeRates/exchangeRatesReducer";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const persistConfigRequestCounter = {
  key: "requestCounter",
  storage,
  whitelist: ["requestCounter"],
};

export const store = configureStore({
  reducer: {
    exchangeRates: exchangeRatesReducers,
    requestCounter: persistReducer(
      persistConfigRequestCounter,
      requestCounterReducer
    ),
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
