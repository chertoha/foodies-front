import { createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL, axiosBaseQuery } from "services/api";

const recipesApi = createApi({
  reducerPath: "recipes",

  baseQuery: axiosBaseQuery(BASE_URL),

  endpoints: builder => ({
    getRecipies: builder.query({
      query: ({ category = "", ingredient = "", area = "", page = 1, limit = 10 }) => ({
        url: "/recipes",
        method: "GET",
        params: {
          category,
          ingredient,
          area,
          page,
          limit,
        },
      }),
    }),

    getRecipe: builder.query({
      query: id => ({
        url: `/recipes/${id}`,
        method: "GET",
      }),
    }),

    getPopularRecipies: builder.query({
      query: ({ page = 1, limit = 4 }) => ({
        url: "/recipes/popular",
        method: "GET",
        params: {
          page,
          limit,
        },
      }),
    }),
  }),
});

export const { useGetRecipiesQuery, useGetRecipeQuery, useGetPopularRecipiesQuery } = recipesApi;
export default recipesApi;
