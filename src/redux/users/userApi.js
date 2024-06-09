import { createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL, axiosBaseQuery } from "services/api";

const userApi = createApi({
  reducerPath: "user",

  baseQuery: axiosBaseQuery(BASE_URL),

  endpoints: builder => ({
    getUserInfo: builder.query({
      query: id => ({
        url: `/users/${id}`,
        method: "GET",
      }),
    }),

    updateUserAvatar: builder.mutation({
      query: file => ({
        url: "/users",
        method: "PATCH",
        data: file,
        headers: {
          "Content-Type": "multipart/form-data;",
        },
      }),
    }),
  }),
});

export const {} = userApi;
export default userApi;
