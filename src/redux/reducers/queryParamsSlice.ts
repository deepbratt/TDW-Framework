import { createSlice } from '@reduxjs/toolkit';

export interface IInitialState {
  queryParams: object | any;
}

const initialState: IInitialState = {
  queryParams: {}
};

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setQueryParams: (state, action) => {
      state.queryParams = action.payload;
    },
    emptyQueryParams: (state) => {
      state.queryParams = {};
    }
  }
});

export const { setQueryParams, emptyQueryParams } = querySlice.actions;

export default querySlice.reducer;
