import { createSlice } from '@reduxjs/toolkit';

export interface IInitialState {
  filters: any;
  // {
  // province: [];
  // city: [];
  // registrationCity: [];
  // make: [];
  // model: [];
  // transmission: [];
  // assembly: [];
  // engineType: [];
  // color: [];
  // bodyType: [];
  // pictureAvailability: boolean;
  // videoAvailability: boolean;
  // sellerType: [];
  // adType: [];
  // sort: string;
  // condition: string;
  // priceRange: number[];
  // yearRange: number[];
  // mileageRange: number[];
  // engineCapacityRange: number[];
  // };
  appliedFilters: any[];
}

const initialState: IInitialState = {
  filters: {
    province: [],
    city: [],
    registrationCity: [],
    make: [],
    model: [],
    transmission: [],
    assembly: [],
    engineType: [],
    color: [],
    bodyType: [],
    pictureAvailability: false,
    videoAvailability: false,
    sellerType: [],
    adType: [],
    sort: '',
    condition: '',
    priceRange: [0, 50000000],
    yearRange: [1971, 2021],
    mileageRange: [0, 500000],
    engineCapacityRange: [0, 10000]
  },
  appliedFilters: []
};

const carFiltersSlice = createSlice({
  name: 'carFilters',
  initialState,
  reducers: {
    setFilter: (state, actions) => {
      state.filters[actions.payload.name] = actions.payload.value;
    },
    setArrayFilter: (state, actions) => {
      state.filters[actions.payload.name] = [
        ...state.filters[actions.payload.name],
        actions.payload.value
      ];
    },
    setFilters: (state, actions) => {
      state.filters = actions.payload;
    },
    setAppliedFilters: (state, actions) => {
      state.appliedFilters = actions.payload;
    },
    removeArrayFilter: (state, actions) => {
      state.filters[actions.payload.name] = state.filters[
        actions.payload.name
      ].filter((item: string) => item !== actions.payload.value);
    },
    removeFilter: (state, actions) => {
      state.filters[actions.payload] =
        initialState[actions.payload as keyof IInitialState];
    },
    resetFilters: (state) => {
      state.filters = {
        province: [],
        city: [],
        registrationCity: [],
        make: [],
        model: [],
        transmission: [],
        assembly: [],
        engineType: [],
        color: [],
        bodyType: [],
        pictureAvailability: false,
        videoAvailability: false,
        sellerType: [],
        adType: [],
        sort: '',
        condition: '',
        priceRange: [0, 50000000],
        yearRange: [1971, 2021],
        mileageRange: [0, 500000],
        engineCapacityRange: [0, 10000]
      };
    }
  }
});

export const {
  setFilter,
  setArrayFilter,
  setFilters,
  setAppliedFilters,
  removeFilter,
  removeArrayFilter,
  resetFilters
} = carFiltersSlice.actions;

export default carFiltersSlice.reducer;
