import React from "react";
import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";
import Category from "../Category/Category";
import CategoryList from "../CategoryGrid/CategoryList";
import CategoryCard from "../CategoryCard/CategoryCard";
import router from "config/router";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
