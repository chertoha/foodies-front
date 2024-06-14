import React, { useEffect } from "react";
import router from "config/router";
import { RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authCurrentUserThunk } from "../../redux/auth/thunks";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authCurrentUserThunk());
  }, [dispatch]);
  return (
    <>
      <RouterProvider router={router} />

      <ToastContainer autoClose={5000} />
    </>
  );
};

export default App;
