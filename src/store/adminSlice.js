import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: JSON.parse(localStorage.getItem("adminPizza")),
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    login: (state, action) => {
      state.login = true;
      localStorage.setItem("adminPizza", true);
    },
  },
});

export default adminSlice;
