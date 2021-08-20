import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import carFiltersSlice from "./carFiltersSlice";
import layoutSlice from "./layoutSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  layout: layoutSlice,
  carFilters: carFiltersSlice
});

export default rootReducer;
