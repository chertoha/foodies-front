import React, { createContext, useContext, useEffect } from "react";
import router from "config/router";
import { RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authCurrentUserThunk } from "../../redux/auth/thunks";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGetCurrentUserDataQuery } from "../../redux/recipes/recipesApi";

const FavoritesContext = createContext({ favorites: [] });
export const useFavoritesContext = () => useContext(FavoritesContext);

const App = () => {
  const { data: user } = useGetCurrentUserDataQuery();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authCurrentUserThunk());
  }, [dispatch]);

  return (
    <>
      <FavoritesContext.Provider value={{ favorites: user ? user.favorites : [] }}>
        <RouterProvider router={router} />
        <ToastContainer autoClose={5000} />
      </FavoritesContext.Provider>
    </>
  );
};

export default App;
