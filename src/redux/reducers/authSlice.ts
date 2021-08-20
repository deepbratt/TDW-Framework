import { createSlice } from "@reduxjs/toolkit";

export interface IInitialState {
  user?: object;
  isLoggedIn: boolean;
  token?: string;
}

const initialState: IInitialState = {
  user: {},
  isLoggedIn: true,
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("jwt", action.payload.token);
    },
    logout: (state) => {
      state.user = {};
      state.token = "";
      state.isLoggedIn = true;
      localStorage.removeItem("jwt");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
