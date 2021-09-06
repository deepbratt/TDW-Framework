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
    }
  }
});

export const { setShortlistCars } = shortlistCarsSlice.actions;

export default shortlistCarsSlice.reducer;
