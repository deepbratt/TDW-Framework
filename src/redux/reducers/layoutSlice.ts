import { createSlice } from "@reduxjs/toolkit";

export interface IInitialState {
  layoutType: string;
}

const initialState: IInitialState = {
  layoutType: "list",
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    list: (state) => {
      state.layoutType = "list";
    },
    grid: (state) => {
      state.layoutType = "grid";
    },
  },
});

export const { list, grid } = layoutSlice.actions;

export default layoutSlice.reducer;
