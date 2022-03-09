import { createSlice } from '@reduxjs/toolkit';

export interface IInitialState {
  type: string;
  message: string;
  alertOpen: boolean;
}

const initialState: IInitialState = {
  type: '',
  message: '',
  alertOpen: false
};

const responseMessageSlice = createSlice({
  name: 'responseMessage',
  initialState,
  reducers: {
    setToastMessage: (state, action: any) => {
      state.type = action.payload.type;
      state.message = action.payload.message;
    },
    setAlertOpen: (state) => {
      state.alertOpen = true;
    },
    setAlertClose: (state) => {
      state.alertOpen = false;
    }
  }
});

export const { setToastMessage, setAlertOpen, setAlertClose } = responseMessageSlice.actions;

export default responseMessageSlice.reducer;
