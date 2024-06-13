import React from "react";
import { RecipePopularContainer, RecipePopularList, RecipeListItem } from "./RecipesPopular.styled";
import SectionTitle from "components/SectionTitle";
import RecipeCard from "../RecipeCard/RecipeCard";
import { useGetPopularRecipesQuery } from "../../redux/recipes/recipesApi";
import { useAuth } from "hooks/useAuth";

const RecipesPopular = () => {
  const { data, error, isLoading } = useGetPopularRecipesQuery({ page: 1, limit: 4 });
  const { user } = useAuth();

  if (isLoading) {
    return;
  }

  if (error) {
    return;
  }

  const handleToggleFavorite = recipeId => {
    console.log(`Favorite toggled for recipe ${recipeId}`);
  };

  return (
    <RecipePopularContainer>
      <SectionTitle label={"Popular recipes"} />
      <RecipePopularList>
        {data.result.map(recipe => (
          <RecipeListItem key={recipe._id}>
            <RecipeCard
              recipe={{
                id: recipe._id,
                title: recipe.title,
                description: recipe.description,
                thumb: recipe.thumb,
                isFavorite: recipe.favorite || false,
              }}
              author={{
                id: recipe.owner._id,
                name: recipe.owner.name,
                avatar: recipe.owner.avatar,
              }}
              onToggleFavorite={handleToggleFavorite}
              isAuthenticated={!!user}
            />
          </RecipeListItem>
        ))}
      </RecipePopularList>
    </RecipePopularContainer>
  );
};

export default RecipesPopular;
