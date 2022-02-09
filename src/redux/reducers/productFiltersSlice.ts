import { createSlice } from '@reduxjs/toolkit';
import { getKeyValue } from '../../Utils/helperFunctions';

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
  // price: number[];
  // modelYear: number[];
  // milage: number[];
  // engineCapacity: number[];
  // };
}

const initialState: IInitialState = {
  filters: {
    category: [],
    subCategory: [],
    city: [],
    make: [],
    brand: [],
    color: [],
    adType: '',
    sort: '',
    condition: '',
    keyword: '',
    price: ['', '']
  }
};

const productFiltersSlice = createSlice({
  name: 'productFilters',
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
      Object.entries(actions.payload).map(([keys, values]: any) => {
        state.filters[keys] = values;
      });
    },
    removeArrayFilter: (state, actions) => {
      state.filters[actions.payload.name] = state.filters[
        actions.payload.name
      ].filter((item: string) => item !== actions.payload.value);
    },
    removeFilter: (state, actions) => {
      state.filters[actions.payload.name] = actions.payload.value;
    },
    resetFilters: (state) => {
      state.filters = {
        category: [],
        subCategory: [],
        city: [],     
        make: [],
        brand: [],    
        color: [],
        adType: '',
        sort: '',
        condition: '',
        keyword: '',
        price: ['', ''],
      };
    }
  }
});

export const {
  setFilter,
  setArrayFilter,
  setFilters,
  removeFilter,
  removeArrayFilter,
  resetFilters
} = productFiltersSlice.actions;

export default productFiltersSlice.reducer;
