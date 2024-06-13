import { createSlice } from "@reduxjs/toolkit";
import { authSignUpThunk, authSignInThunk, authLogOutThunk, authCurrentUserThunk } from "./thunks";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

const fulfildAuthSignUp = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoading = false;
};
const pandingAuthSignUp = (state, _) => {
  state.isLoading = true;
  state.error = null;
};
const rejectedAuthSignUp = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
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
const rejectedAuthSignIn = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const fulfildAuthLogOut = (state, _) => {
  state.error = null;
  state.token = "";
  state.user = null;
  state.isLoading = false;
};
const pandingAuthLogOut = (state, _) => {
  state.isLoading = true;
};
const rejectedAuthLogOut = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const fulfildAuthCurrentUser = (state, { payload }) => {
  state.user = payload.user;
  state.isLoading = false;
};
const pandingAuthCurrentUser = (state, _) => {
  state.isLoading = true;
  state.error = null;
};
const rejectedAuthCurrentUser = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
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
      .addCase(authLogOutThunk.rejected, rejectedAuthLogOut)
      .addCase(authCurrentUserThunk.fulfilled, fulfildAuthCurrentUser)
      .addCase(authCurrentUserThunk.pending, pandingAuthCurrentUser)
      .addCase(authCurrentUserThunk.rejected, rejectedAuthCurrentUser);
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
