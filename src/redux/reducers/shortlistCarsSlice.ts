import { createSlice } from '@reduxjs/toolkit';
import { ICarCard } from '../../Utils/interfaces/products.interface';

export interface IInitialState {
  shortlistCars: ICarCard[] | [];
}

const initialState: IInitialState = {
  shortlistCars: []
};

const shortlistCarsSlice = createSlice({
  name: 'shortlistCars',
  initialState,
  reducers: {
    setShortlistCars: (state, action) => {
      state.shortlistCars = action.payload;
    },
    emptyShortlistCars: (state) => {
      state.shortlistCars = [];
    }
  }
});

export const { setShortlistCars, emptyShortlistCars } = shortlistCarsSlice.actions;

export default shortlistCarsSlice.reducer;
