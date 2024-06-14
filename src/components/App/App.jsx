import React, { createContext, useContext, useEffect } from "react";
import router from "config/router";
import { RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authCurrentUserThunk } from "../../redux/auth/thunks";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLazyGetCurrentUserDataQuery } from "../../redux/recipes/recipesApi";
import { useAuth } from "hooks/useAuth";

const FavoritesContext = createContext({ favorites: [] });
export const useFavoritesContext = () => useContext(FavoritesContext);

const App = () => {
  const { user } = useAuth();

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
    <>
      <FavoritesContext.Provider value={{ favorites: userData ? userData.favorites : [] }}>
        <RouterProvider router={router} />
        <ToastContainer autoClose={5000} />
      </FavoritesContext.Provider>
    </>
  );
};

export default App;
