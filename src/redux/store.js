import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import basket from "./slices/basketSlice";
import order from "./slices/orderSlice";

export const store = configureStore({
  reducer: {
    filter,
    basket,
    order,
  },
});
