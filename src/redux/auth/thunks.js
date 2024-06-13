import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, clearAuthHeader, setAuthHeader } from "services/api";

export const authSignUpThunk = createAsyncThunk("authSignUp", async (data, thunkAPI) => {
  try {
    const response = await api.post(`/users/signup`, data);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const authSignInThunk = createAsyncThunk("authSignIn", async (data, thunkAPI) => {
  try {
    const response = await api.post(`/users/signin`, data);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const authLogOutThunk = createAsyncThunk("authLogOut", async (_, thunkAPI) => {
  try {
    const response = await api.post(`/users/logout`);
    clearAuthHeader();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const authCurrentUserThunk = createAsyncThunk("authCurrentUser", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const token = state.auth.token;
  if (!token) {
    return thunkAPI.rejectWithValue("Can't get user");
  }
  try {
    setAuthHeader(token);
    const response = await api.get(`users/current`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
