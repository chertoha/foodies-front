import { createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL, axiosBaseQuery } from "services/api";

const areasApi = createApi({
  reducerPath: "areas",

  baseQuery: axiosBaseQuery(BASE_URL),

  endpoints: builder => ({
    getAreas: builder.query({
      query: () => ({
        url: "/areas",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAreasQuery } = areasApi;
export default areasApi;
