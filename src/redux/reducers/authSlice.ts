import { createSlice } from '@reduxjs/toolkit';

export interface IInitialState {
  user?: object | any;
  isLoggedIn: boolean;
  token?: string;
}

const initialState: IInitialState = {
  user: {},
  isLoggedIn: localStorage.getItem('caroktajwt') ? true : false,
  token: ''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.data.user;
      state.token = action.payload.token;
      localStorage.setItem('caroktajwt', action.payload.token);
      
    },
    logout: (state) => {
      state.user = {};
      state.token = '';
      state.isLoggedIn = false;
      localStorage.removeItem('caroktajwt');
    },
     updateUserData:(state,action)=>{
      state.user = action.payload.data.user;
    },
    updateToken:(state,action)=>{
      state.token = action.payload;
      localStorage.setItem('caroktajwt', action.payload);
    }
  }
});

export const { login, logout,updateUserData, updateToken } = authSlice.actions;

export default authSlice.reducer;
