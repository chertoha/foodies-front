import { configureStore } from "@reduxjs/toolkit";
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import categoriesApi from "./categories/categoriesApi";
import testimonialsApi from "./testimonials/testimonialsApi";
import ingredientsApi from "./ingredients/ingredientsApi";
import areasApi from "./areas/areasApi";
import recipesApi from "./recipes/recipesApi";
import userApi from "./users/userApi";

export const store = configureStore({
  reducer: {
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [testimonialsApi.reducerPath]: testimonialsApi.reducer,
    [ingredientsApi.reducerPath]: ingredientsApi.reducer,
    [areasApi.reducerPath]: areasApi.reducer,
    [recipesApi.reducerPath]: recipesApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
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
      userApi.middleware
    );
  },
});

export const persistor = persistStore(store);
