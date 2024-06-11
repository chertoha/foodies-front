import { createAsyncThunk } from "@reduxjs/toolkit";
import { authSignUpAPI, authSignInAPI, authLogOutAPI } from "./authAPI";

export const authSignUpThunk = createAsyncThunk("authSignUp", async (data, thunkAPI) => {
  try {
    const response = await authSignUpAPI(data);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const authSignInThunk = createAsyncThunk("authSignIn", async (data, thunkAPI) => {
  try {
    const response = await authSignInAPI(data);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const authLogOutThunk = createAsyncThunk("authLogOut", async (token, thunkAPI) => {
  try {
    const response = await authLogOutAPI(token);
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
