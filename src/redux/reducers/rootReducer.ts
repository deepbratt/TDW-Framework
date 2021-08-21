import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import layoutSlice from './layoutSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  layout: layoutSlice
});

export default rootReducer;
