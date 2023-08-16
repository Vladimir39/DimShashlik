import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import basket from "./slices/basketSlice";
import timesDelivery from "./slices/timesDelivery";

export const store = configureStore({
  reducer: {
    filter,
    basket,
    timesDelivery,
  },
});
