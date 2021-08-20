import { createSlice } from "@reduxjs/toolkit";

export interface IInitialState {
    keywords: string;
    cars: string[] | [];
    pictureAvailability: boolean;
}

const initialState: IInitialState = {
    keywords: "",
    cars: [],
    pictureAvailability: false,
};

const carFiltersSlice = createSlice({
  name: "carFilter",
  initialState,
  reducers: {
    getFilter: (state) => {
        return {...state}
    }
  },
});

export const { getFilter } = carFiltersSlice.actions;

export default carFiltersSlice.reducer;
