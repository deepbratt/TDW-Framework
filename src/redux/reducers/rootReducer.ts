import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import layoutSlice from './layoutSlice';
import queryParamsSlice from './queryParamsSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  layout: layoutSlice,
  queryParams: queryParamsSlice
});

export default rootReducer;
