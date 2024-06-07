import React from "react";
import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";
import Category from "../Category/Category";
import CategoryList from "../CategoryGrid/CategoryList";
import CategoryCard from "../CategoryCard/CategoryCard";

// Створення маршрутизатора з маршрутами для компонентів
const router = createBrowserRouter([
  {
    path: "/",
    element: <Category />,
  },
  {
    path: "/grid",
    element: <CategoryList />,
  },
  {
    path: "/card",
    element: <CategoryCard category={{ id: 1, name: "Beef", image: "path_to_image" }} />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
