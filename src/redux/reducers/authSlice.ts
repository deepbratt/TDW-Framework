import { createSlice } from '@reduxjs/toolkit';

export interface IInitialState {
  user?: object | any;
  isLoggedIn: boolean;
  token?: string;
}

const initialState: IInitialState = {
  user: {},
  isLoggedIn: localStorage.getItem('tezdealzjwt') ? true : false,
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
      localStorage.setItem('tezdealzjwt', action.payload.token);
      
    },
    logout: (state) => {
      state.user = {};
      state.token = '';
      state.isLoggedIn = false;
      localStorage.removeItem('tezdealzjwt');
    },
     updateUserData:(state,action)=>{
      console.log('[UpdateuserData]',action.payload)
      state.user = action.payload.data.user;
    }
  }
});

export const { login, logout,updateUserData } = authSlice.actions;

export default authSlice.reducer;
