import { createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL, axiosBaseQuery } from "services/api";

const usersApi = createApi({
  reducerPath: "users",

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
    }),

    followUser: builder.mutation({
      query: id => ({
        url: `/users/following/${id}`,
        method: "POST",
      }),
    }),

    unfollowUser: builder.mutation({
      query: id => ({
        url: `/users/following/${id}`,
        method: "DELETE",
      }),
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
