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
    removeShortlistCars: (state, action) => {
      let newState = state.shortlistCars.filter((item: ICarCard) => {
        return item._id !== action.payload;
      });
      console.log("new state", newState)
      state.shortlistCars = newState;
    }
  }
});

export const { setShortlistCars, removeShortlistCars } =
  shortlistCarsSlice.actions;

export default shortlistCarsSlice.reducer;
