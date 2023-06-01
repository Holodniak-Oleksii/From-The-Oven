import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("tokenPizza"),
  isAuth: false,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("tokenPizza", action.payload);
    },
    auth: (state) => {
      state.isAuth = true;
    },
  },
});

export default adminSlice;
