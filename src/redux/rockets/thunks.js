import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import baseUrl, { ROCKETS } from '../api';

// Get rockets
const fetchRockets = createAsyncThunk('rockets/fetchRockets', async (thunkAPI) => {
  try {
    const response = await axios(`${baseUrl}/${ROCKETS}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong!');
  }
});

export default fetchRockets;
