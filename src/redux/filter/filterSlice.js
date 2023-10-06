import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brand: '',
  price: '',
  styledPrice: 'To $',
  from: '',
  to: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setBrand: (state, { payload }) => {
      state.brand = payload;
    },
    setPrice: (state, { payload }) => {
      state.price = payload;
    },
    setStyledPrice: (state, { payload }) => {
      state.styledPrice = payload;
    },
    setFrom: (state, { payload }) => {
      state.from = payload;
    },
    setTo: (state, { payload }) => {
      state.to = payload;
    },
    resetFilter: state => {
      state.brand = '';
      state.price = '';
      state.styledPrice = 'To $';
      state.from = '';
      state.to = '';
    },
  },
});

export const {
  setBrand,
  setFrom,
  setPrice,
  setStyledPrice,
  setTo,
  resetFilter,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
