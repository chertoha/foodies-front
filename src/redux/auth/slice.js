import { createSlice } from "@reduxjs/toolkit";
import { authSignUpThunk, authSignInThunk, authLogOutThunk } from "./thunks";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

const fulfildAuthSignUp = (state, { payload }) => {
  state.token = payload.token;
  state.isLoading = false;
};
const pandingAuthSignUp = (state, _) => {
  state.isLoading = true;
  state.error = null;
};
const rejectedAuthSignUp = (state, { error }) => {
  state.isLoading = false;
  state.error = error;
};

const fulfildAuthSignIn = (state, { payload }) => {
  state.token = payload.token;
  state.user = payload.user;
  state.isLoading = false;
};
const pandingAuthSignIn = (state, _) => {
  state.isLoading = true;
  state.error = null;
};
const rejectedAuthSignIn = (state, { error }) => {
  state.isLoading = false;
  state.error = error;
};

const fulfildAuthLogOut = (state, _) => {
  state.error = null;
  state.token = "";
  state.isLoading = false;
};
const pandingAuthLogOut = (state, _) => {
  state.isLoading = true;
};
const rejectedAuthLogOut = (state, { error }) => {
  state.isLoading = false;
  state.error = error;
};

const authUserSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: bilder => {
    bilder
      .addCase(authSignUpThunk.fulfilled, fulfildAuthSignUp)
      .addCase(authSignUpThunk.pending, pandingAuthSignUp)
      .addCase(authSignUpThunk.rejected, rejectedAuthSignUp)
      .addCase(authSignInThunk.fulfilled, fulfildAuthSignIn)
      .addCase(authSignInThunk.pending, pandingAuthSignIn)
      .addCase(authSignInThunk.rejected, rejectedAuthSignIn)
      .addCase(authLogOutThunk.fulfilled, fulfildAuthLogOut)
      .addCase(authLogOutThunk.pending, pandingAuthLogOut)
      .addCase(authLogOutThunk.rejected, rejectedAuthLogOut);
  },
});

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "user"],
};

// export const authUserReduser = authUserSlice.reducer;
export const persistedAuthReducer = persistReducer(authPersistConfig, authUserSlice.reducer);
export default authUserSlice;
