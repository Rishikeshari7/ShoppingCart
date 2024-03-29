import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { CartSlice } from "./slice";

export const store=configureStore({
  reducer:{
    cart:CartSlice.reducer,
  },
});