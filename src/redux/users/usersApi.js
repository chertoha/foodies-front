import { createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL, axiosBaseQuery } from "services/api";

const usersApi = createApi({
  reducerPath: "users",

  baseQuery: axiosBaseQuery(BASE_URL),

  tagTypes: ["Following", "Current", "UserInfo", "Followers"],

  endpoints: builder => ({
    getCurrentUser: builder.query({
      query: () => ({
        url: `/users/current`,
        method: "GET",
      }),
      providesTags: ["Current"],
    }),

    getUserInfo: builder.query({
      query: id => ({
        url: `/users/${id}`,
        method: "GET",
      }),
      providesTags: ["UserInfo"],
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
      providesTags: ["Followers"],
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
      invalidatesTags: ["Following", "Current", "UserInfo", "Followers"],
    }),

    unfollowUser: builder.mutation({
      query: id => ({
        url: `/users/following/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Following", "Current", "UserInfo", "Followers"],
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
  useGetCurrentUserQuery,
  useLazyGetCurrentUserQuery,

  useUpdateUserAvatarMutation,
  useFollowUserMutation,
  useUnfollowUserMutation,
} = usersApi;
export default usersApi;
