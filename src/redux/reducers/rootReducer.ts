import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import layoutSlice from './layoutSlice';
import carFiltersSlice from './carFiltersSlice';
import queryParamsSlice from './queryParamsSlice';
import shortlistCarsSlice from './shortlistCarsSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  layout: layoutSlice,
  carFilters: carFiltersSlice,
  queryParams: queryParamsSlice,
  shortlistCars: shortlistCarsSlice
});

export default rootReducer;
