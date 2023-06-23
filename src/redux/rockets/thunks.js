import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Get rockets
const fetchRockets = createAsyncThunk('rockets/fetchRockets', async ({ url }, thunkAPI) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(`something went wrong! ${error.message}`);
  }
});

export default fetchRockets;
