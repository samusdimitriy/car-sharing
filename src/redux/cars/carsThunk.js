import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://6508557556db83a34d9c254d.mockapi.io';

export const getCarsThunk = createAsyncThunk(
  'cars/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/advert`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
