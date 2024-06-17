import categoriesApi from "./categories/categoriesApi";
import testimonialsApi from "./testimonials/testimonialsApi";
import ingredientsApi from "./ingredients/ingredientsApi";
import areasApi from "./areas/areasApi";
import recipesApi from "./recipes/recipesApi";
import usersApi from "./users/usersApi";
import authUserSlice, { persistedAuthReducer } from "./auth/slice";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

export const store = configureStore({
  reducer: {
    [authUserSlice.reducerPath]: persistedAuthReducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [testimonialsApi.reducerPath]: testimonialsApi.reducer,
    [ingredientsApi.reducerPath]: ingredientsApi.reducer,
    [areasApi.reducerPath]: areasApi.reducer,
    [recipesApi.reducerPath]: recipesApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      categoriesApi.middleware,
      testimonialsApi.middleware,
      ingredientsApi.middleware,
      areasApi.middleware,
      recipesApi.middleware,
      usersApi.middleware
    );
  },
});

export const persistor = persistStore(store);
