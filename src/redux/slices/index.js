import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  continent: "",
  country: "",
};

export const practiseSlice = createSlice({
  name: "practise-redux",
  initialState,
  reducers: {
    mapFormData: (state, { payload }) => {
      state[payload.key] = payload.value;
    },
    clearCountryData: (state) => {
      state.country = "";
    },
  },
});

export const { mapFormData, clearCountryData } = practiseSlice.actions;

export default practiseSlice.reducer;
