import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOrder = createAsyncThunk("/", async (order) => {
  const { data } = await axios.post("http://80.90.191.168:5555/", order);
  return data;
});

const initialState = {
  posts: {
    items: [],
    status: "loading",
  },
};
console.log(initialState.posts.items);
export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOrder.pending]: (state) => {
      state.posts.items = [];
      state.posts.status = "loading";
    },
    [fetchOrder.fulfilled]: (state, actions) => {
      state.posts.items = actions.payload;
      state.posts.status = "loaded";
    },
    [fetchOrder.error]: (state) => {
      state.posts.items = [];
      state.posts.status = "";
    },
  },
});

export const {} = orderSlice.actions;

export default orderSlice.reducer;
