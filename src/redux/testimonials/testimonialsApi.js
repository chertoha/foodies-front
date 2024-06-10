import { createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL, axiosBaseQuery } from "services/api";

const testimonialsApi = createApi({
  reducerPath: "testimonials",

  baseQuery: axiosBaseQuery(BASE_URL),

  endpoints: builder => ({
    getTestimonials: builder.query({
      query: ({ page = 1, limit = 5 }) => ({
        url: "/testimonials",
        method: "GET",
        params: {
          page,
          limit,
        },
      }),
    }),
  }),
});

export const { useGetTestimonialsQuery } = testimonialsApi;
export default testimonialsApi;
