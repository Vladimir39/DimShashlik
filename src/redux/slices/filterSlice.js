import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCatigoriesId(state, action) {
      state.categoryId = action.payload;
    },
  },
});

export const { setCatigoriesId } = filterSlice.actions;

export default filterSlice.reducer;
