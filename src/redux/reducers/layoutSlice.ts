import { createSlice } from '@reduxjs/toolkit';

export interface IInitialState {
  layoutType: string;
}

const initialState: IInitialState = {
  layoutType: 'list'
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setLayout: (state, action: any) => {
      state.layoutType = action.payload;
    }
  }
});

export const { setLayout } = layoutSlice.actions;

export default layoutSlice.reducer;
