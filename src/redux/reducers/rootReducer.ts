import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import layoutSlice from "./layoutSlice";
import carFiltersSlice from "./carFiltersSlice";
import queryParamsSlice from './queryParamsSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  layout: layoutSlice,
  carFilters: carFiltersSlice,
  queryParams: queryParamsSlice
});

export default rootReducer;
