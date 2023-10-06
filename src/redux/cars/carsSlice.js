import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { getCarsThunk } from './carsThunk';

const initialState = {
  cars: [],
  isLoading: false,
  error: '',
  favoriteCars: [],
  filteredCars: [],
  currentItems: 8,
  isFiltered: false,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    addFavorite: (state, { payload }) => {
      state.favoriteCars = [payload, ...state.favoriteCars];
    },
    removeFavorite: (state, { payload }) => {
      const index = state.favoriteCars.findIndex(car => car.id === payload);
      state.favoriteCars.splice(index, 1);
    },
    changeFilteredCars: (state, { payload }) => {
      const filteredCars = state.cars.filter(car => {
        const match = car.rentalPrice.match(/\$(\d+)/);
        const price = parseInt(match[1], 10);
        if (payload.brand && car.make !== payload.brand) {
          return false;
        }
        if (payload.price && price > payload.price) {
          return false;
        }
        if (
          payload.mileage &&
          (car.mileage < payload.mileage.from ||
            car.mileage > payload.mileage.to)
        ) {
          return false;
        }
        return true;
      });
      state.filteredCars = filteredCars;
      state.isFiltered = true;
    },
    resetArr: state => {
      state.isFiltered = false;
      state.filteredCars = [];
    },
    changePage: state => {
      state.currentItems += 8;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCarsThunk.fulfilled, (state, { payload }) => {
        const sortedCars = [...payload].sort((a, b) => {
          const priceA = parseFloat(a.rentalPrice.replace('$', ''));
          const priceB = parseFloat(b.rentalPrice.replace('$', ''));
          return priceA - priceB;
        });
        state.cars = sortedCars;
        state.isLoading = false;
        state.error = '';
      })
      .addCase(getCarsThunk.pending, handlePending)
      .addCase(getCarsThunk.rejected, handleRejected);
  },
});

const carsReducer = carsSlice.reducer;
const persistConfig = {
  key: 'favorite',
  storage,
  whitelist: ['favoriteCars'],
};

export const {
  addFavorite,
  removeFavorite,
  changeFilteredCars,
  resetArr,
  changePage,
} = carsSlice.actions;

export const persistedCarReducer = persistReducer(persistConfig, carsReducer);
