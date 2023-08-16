import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  times: 50,
};

export const timesDelivery = createSlice({
  name: "timesDelivery",
  initialState,
  reducers: {
    setTimesDelivery(state, action) {
      state.times = action.payload;
    },
  },
});

export const { setTimesDelivery } = timesDelivery.actions;

export default timesDelivery.reducer;
