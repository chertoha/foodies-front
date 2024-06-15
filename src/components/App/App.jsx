import React, { createContext, useContext, useEffect } from "react";
import router from "config/router";
import { RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authCurrentUserThunk } from "../../redux/auth/thunks";
import { useLazyGetCurrentUserDataQuery } from "../../redux/recipes/recipesApi";
import { useAuth } from "hooks/useAuth";

import { ToastContainer } from "react-toastify";
import Loader from "components/Loader/Loader";

const FavoritesContext = createContext({ favorites: [] });
export const useFavoritesContext = () => useContext(FavoritesContext);

const App = () => {
  const { user, isLoading } = useAuth();

  const [getUserData, { data: userData }] = useLazyGetCurrentUserDataQuery();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authCurrentUserThunk());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      getUserData();
    }
  }, [getUserData, user]);

  return (
    <FavoritesContext.Provider value={{ favorites: userData ? userData.favorites : [] }}>
      <RouterProvider router={router} />
      <ToastContainer autoClose={3000} />
      {isLoading && <Loader />}
    </FavoritesContext.Provider>
  );
};

export default App;
