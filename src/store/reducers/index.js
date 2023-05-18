import { combineReducers } from "@reduxjs/toolkit";
import basketSlice from "../basketSlice";

export const rootReducer = combineReducers({
  [basketSlice.name]: basketSlice.reducer,
});
