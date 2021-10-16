import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiGetRates } from "../../utils/apiServices";

export const getExchRates = createAsyncThunk(
  "exchRates/getExchRates",
  async (_, { rejectWithValue }) => {
    try {
      const ratesGet = await apiGetRates();
      console.log(ratesGet);
      return Array.isArray(ratesGet) ? ratesGet : [];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
