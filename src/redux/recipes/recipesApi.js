import { createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL, axiosBaseQuery } from "services/api";

const recipesApi = createApi({
  reducerPath: "recipes",

  baseQuery: axiosBaseQuery(BASE_URL),

  tagTypes: ["Recipe", "Own", "Favorite"],

  endpoints: builder => ({
    getRecipes: builder.query({
      query: ({ category = "", ingredient = "", area = "", page = 1, limit = 10 }) => ({
        url: "/recipes",
        method: "GET",
        params: {
          category,
          ingredient,
          area,
          page,
          limit,
        },
      }),
      providesTags: ["Recipe"],
    }),

    getRecipe: builder.query({
      query: id => ({
        url: `/recipes/${id}`,
        method: "GET",
      }),
    }),

    getPopularRecipes: builder.query({
      query: ({ page = 1, limit = 4 }) => ({
        url: "/recipes/popular",
        method: "GET",
        params: {
          page,
          limit,
        },
      }),
    }),

    getOwnRecipes: builder.query({
      query: ({ page = 1, limit = 9 }) => ({
        url: "/recipes/own",
        method: "GET",
        params: {
          page,
          limit,
        },
      }),
      providesTags: ["Own"],
    }),

    createRecipe: builder.mutation({
      query: data => ({
        url: "/recipes",
        method: "POST",
        data,
        headers: {
          "Content-Type": "multipart/form-data;",
        },
      }),
      invalidatesTags: ["Recipe", "Own"],
    }),

    deleteRecipe: builder.mutation({
      query: id => ({
        url: `/recipes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Recipe", "Own"],
    }),

    getFavoriteRecipes: builder.query({
      query: ({ page = 1, limit = 9 }) => ({
        url: "/recipes/favorites",
        method: "GET",
        params: {
          page,
          limit,
        },
      }),
      providesTags: ["Favorite"],
    }),

    addRecipeToFavorites: builder.mutation({
      query: id => ({
        url: `/recipes/${id}/favorite`,
        method: "POST",
      }),
      invalidatesTags: ["Favorite", "Recipe", "Own"],
    }),

    removeRecipeFromFavorites: builder.mutation({
      query: id => ({
        url: `/recipes/${id}/favorite`,
        method: "DELETE",
      }),
      invalidatesTags: ["Favorite", "Recipe", "Own"],
    }),
  }),
});

export const {
  useGetRecipesQuery,
  useGetRecipeQuery,
  useGetPopularRecipesQuery,
  useGetFavoriteRecipesQuery,
  useGetOwnRecipesQuery,

  useCreateRecipeMutation,
  useDeleteRecipeMutation,
  useAddRecipeToFavoritesMutation,
  useRemoveRecipeFromFavoritesMutation,
} = recipesApi;
export default recipesApi;
