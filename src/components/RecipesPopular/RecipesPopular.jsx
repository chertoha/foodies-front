import React from "react";
import { RecipePopularContainer, RecipePopularList, RecipeListItem } from "./RecipesPopular.styled";
import SectionTitle from "components/SectionTitle";
import RecipeCard from "components/RecipeCard";

const RecipesPopular = ({ list, author }) => {
  const handleSignIn = () => {
    console.log("Sign in clicked");
  };

  const handleProfile = authorId => {
    console.log(`Profile of author ${authorId} clicked`);
  };

  const handleToggleFavorite = recipeId => {
    console.log(`Favorite toggled for recipe ${recipeId}`);
  };

  return (
    <RecipePopularContainer>
      <SectionTitle label={"Popular recipes"} />
      <RecipePopularList>
        {list.slice(0, 4).map(recipe => (
          <RecipeListItem key={recipe._id.$oid}>
            <RecipeCard
              recipe={{
                id: recipe._id.$oid,
                title: recipe.title,
                description: recipe.description,
                thumb: recipe.thumb,
                instructions: recipe.instructions,
                time: recipe.time,
                ingredients: recipe.ingredients,
                isFavorite: recipe.isFavorite || false,
              }}
              author={author}
              onSignIn={handleSignIn}
              onProfile={handleProfile}
              onToggleFavorite={handleToggleFavorite}
            />
          </RecipeListItem>
        ))}
      </RecipePopularList>
    </RecipePopularContainer>
  );
};

export default RecipesPopular;
