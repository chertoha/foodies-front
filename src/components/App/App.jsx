import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "config/router";
import { useDispatch } from "react-redux";
import { authCurrentUserThunk } from "../../redux/auth/thunks";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authCurrentUserThunk());
  }, [dispatch]);
  return <RouterProvider router={router} />;
};

export default App;
