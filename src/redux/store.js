import { configureStore } from "@reduxjs/toolkit";
import practiseRedux from "./slices";

export const store = configureStore({
  reducer: {
    practiseRedux,
  },
});
