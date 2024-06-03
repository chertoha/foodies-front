import { createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL, axiosBaseQuery } from "services/api";

const categoriesApi = createApi({
  reducerPath: "categories",

  baseQuery: axiosBaseQuery(BASE_URL),

  endpoints: builder => ({
    getCategories: builder.query({
      query: () => ({
        url: "/categories",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
export default categoriesApi;
