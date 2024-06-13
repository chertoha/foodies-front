import { createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL, axiosBaseQuery } from "services/api";

const categoriesApi = createApi({
  reducerPath: "categories",

  baseQuery: axiosBaseQuery(BASE_URL),

  endpoints: builder => ({
    getCategories: builder.query({
      query: ({ page = 1, limit = 11 }) => ({
        url: "/categories",
        method: "GET",
        params: { page, limit },
      }),
    }),
  }),
});

export const { useGetCategoriesQuery, useLazyGetCategoriesQuery } = categoriesApi;
export default categoriesApi;
