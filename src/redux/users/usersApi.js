import { createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL, axiosBaseQuery } from "services/api";

const usersApi = createApi({
  reducerPath: "users",

  baseQuery: axiosBaseQuery(BASE_URL),

  tagTypes: ["Following"],

  endpoints: builder => ({
    getUserInfo: builder.query({
      query: id => ({
        url: `/users/${id}`,
        method: "GET",
      }),
    }),

    updateUserAvatar: builder.mutation({
      query: file => ({
        url: "/users/avatar",
        method: "PATCH",
        data: file,
        headers: {
          "Content-Type": "multipart/form-data;",
        },
      }),
    }),

    getUserFollowers: builder.query({
      query: id => ({
        url: `/users/${id}/followers`,
        method: "GET",
      }),
    }),

    getUserFollowing: builder.query({
      query: () => ({
        url: `/users/following`,
        method: "GET",
      }),
      providesTags: ["Following"],
    }),

    followUser: builder.mutation({
      query: id => ({
        url: `/users/following/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["Following"],
    }),

    unfollowUser: builder.mutation({
      query: id => ({
        url: `/users/following/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Following"],
    }),

    getUserRecipes: builder.query({
      query: id => ({
        url: `/users/${id}/recipes`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  useGetUserFollowersQuery,
  useGetUserFollowingQuery,
  useGetUserRecipesQuery,

  useUpdateUserAvatarMutation,
  useFollowUserMutation,
  useUnfollowUserMutation,
} = usersApi;
export default usersApi;
