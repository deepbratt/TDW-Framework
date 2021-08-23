import {  createSlice } from "@reduxjs/toolkit";

export interface IInitialState {
  filters: {
    keywords: string;
    province: string[] | [];
    city: string[] | [];
    registrationCity: string[] | [];
    transmission: string | [];
    engineType: string[] | [];
    color: string[];
    bodyType: string[];
    pictureAvailability: boolean;
    videoAvailability: boolean;
    sellerType: string[];
    adType: string[];
  }
  appliedFilters: []
}

const initialState: IInitialState = {
  filters: {
    keywords: "",
  // priceFrom: 0,
  // priceTo: 0,
  // priceRange: [0, 50000000],
  // yearFrom: 0,
  // yearTo: 0,
  // yearRange: [1900, 2021],
  province: [],
  city: [],
  registrationCity: [],
  // mileageFrom: 0,
  // mileageTo: 0,
  // mileageRange: [0, 1000000],
  transmission: [],
  engineType: [],
  // engineCapacityFrom: 0,
  // engineCapacityTo: 0,
  // engineCapacityRange: [600, 30000],
  color: [],
  bodyType: [],
  pictureAvailability: false,
  videoAvailability: false,
  sellerType: [],
  adType: [],
  },
  appliedFilters: []
};

const carFiltersSlice = createSlice({
  name: "carFilters",
  initialState,
  reducers: {
    setFilter: (state: IInitialState, actions: any) => {
       state.filters = actions.payload;
    },
    setAppliedFilters: (state: IInitialState, actions: any) => {
       state.appliedFilters = actions.payload;
    },
  },
});

export const { setFilter, setAppliedFilters } = carFiltersSlice.actions;

export default carFiltersSlice.reducer;
