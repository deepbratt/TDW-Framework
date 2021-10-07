import { createSlice } from '@reduxjs/toolkit';

export interface IFilterValue {
  data: string;
  id?: string;
  hex?: string;
}

export interface IFilterData {
  filtersData: {
    name: string;
    title: string;
    value: IFilterValue[] | boolean;
    topMost?: string[];
  }[];
}

const initialState: IFilterData = {
  filtersData: [
    {
      name: 'bodyType',
      title: 'Body Type',
      value: [
        { data: 'SUV' },
        { data: 'Sedan' },
        { data: 'Compact Sedan' },
        { data: 'Van' },
        { data: 'Mini Van' },
        { data: 'Hatchback' },
        { data: 'Pick Up' },
        { data: 'Off Road' }
      ],
      topMost: ['SUV', 'Sedan', 'Van']
    },
    {
      name: 'bodyColor',
      title: 'Body Color',
      value: [
        { data: 'Red', hex: '#000000' },
        { data: 'Blue', hex: '#000000' },
        { data: 'Green', hex: '#000000' },
        { data: 'White', hex: '#000000' }
      ]
    }
  ]
};

const filtersDataSlice = createSlice({
  name: 'filtersData',
  initialState,
  reducers: {}
});

// export const {} = filtersDataSlice.actions;

export default filtersDataSlice.reducer;

// let filters = [
//   { name: 'bodyType', value: ['Sedan', 'SUV'] },
//   { name: 'bodyColor', value: ['Red', 'Blue'] }
// ];
