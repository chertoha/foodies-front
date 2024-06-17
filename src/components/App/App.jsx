import React, { useEffect } from "react";
import router from "config/router";
import { RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authCurrentUserThunk } from "../../redux/auth/thunks";
import { useAuth } from "hooks/useAuth";

import { ToastContainer } from "react-toastify";
import Loader from "components/Loader/Loader";

const App = () => {
  const { isLoading } = useAuth();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authCurrentUserThunk());
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer autoClose={3000} />
      {isLoading && <Loader />}
    </>
  );
};

export default App;
