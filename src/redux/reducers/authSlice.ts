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
      state.user = action.payload.data.user;
      state.token = action.payload.data.token;
      console.log("payload", action.payload.data.user);
    },
    logout: (state) => {
      state.user = {};
      state.token = "";
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
