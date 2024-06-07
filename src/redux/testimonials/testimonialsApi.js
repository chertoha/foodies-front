import { createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL, axiosBaseQuery } from "services/api";

const testimonialsApi = createApi({
  reducerPath: "testimonials",

  baseQuery: axiosBaseQuery(BASE_URL),

  endpoints: builder => ({
    getTestimonials: builder.query({
      query: () => ({
        url: "/testimonials",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTestimonialsQuery } = testimonialsApi;
export default testimonialsApi;
