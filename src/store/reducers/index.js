import { combineReducers } from "@reduxjs/toolkit";
import adminSlice from "../adminSlice";
import basketSlice from "../basketSlice";

export const rootReducer = combineReducers({
  [basketSlice.name]: basketSlice.reducer,
  [adminSlice.name]: adminSlice.reducer,
});
