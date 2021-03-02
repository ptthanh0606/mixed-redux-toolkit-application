import { createSlice } from "@reduxjs/toolkit";

const PTCounterSlice = createSlice({
  name: "PTCounterSlice",
  initialState: {
    value: 0,
  },
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
    increateWithValue: (state, action) => {},
  },
});

export const { increase, decrease, increateWithValue } = PTCounterSlice.actions;
export const ptCountSelector = (state) => state.ptcounter.value;

export default PTCounterSlice.reducer;
