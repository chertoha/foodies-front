import { createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL, axiosBaseQuery } from "services/api";

const ingredientsApi = createApi({
  reducerPath: "ingredients",

  baseQuery: axiosBaseQuery(BASE_URL),

  endpoints: builder => ({
    getIngredients: builder.query({
      query: () => ({
        url: "/ingredients",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetIngredientsQuery } = ingredientsApi;
export default ingredientsApi;
