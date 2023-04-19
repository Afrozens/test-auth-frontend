import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { userServicesConfig } from '../../../services/userServicesConfig';

const backendURL = 'http://localhost:5000';
const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const userLogin = createAsyncThunk(
  userServicesConfig.userLogin,
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${backendURL}/api/user/login`,
        { email, password },
        config,
      );
      localStorage.setItem('userToken', data.userToken);
      return data;
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const userRegister = createAsyncThunk(
  userServicesConfig.userRegister,
  async ({ firstName, email, password }, { rejectWithValue }) => {
    try {
      console.log(firstName, email, password);
      await axios.post(
        `${backendURL}/api/user/register`,
        { firstName, email, password },
        config,
      );
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.message);
      }
    }
  },
);
