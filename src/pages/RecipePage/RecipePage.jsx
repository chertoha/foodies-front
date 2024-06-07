import React, { useState, useEffect } from "react";
import Breadcrumbs from "components/UIKit/Breadcrumbs";
import recipeData from "./recipe.json";
import authorData from "./users.json";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import RecipesPopular from "../../components/RecipesPopular/RecipesPopular";
import Container from "../../components/Container/Container";
import { RecipePageContainer } from "./RecipePage.styled";

const RecipePage = () => {
  const [recipe, setRecipe] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    try {
      const loadedRecipe = {
        id: recipeData[0]._id.$oid,
        title: recipeData[0].title,
        description: recipeData[0].description,
        thumb: recipeData[0].thumb,
        instructions: recipeData[0].instructions,
        time: recipeData[0].time,
        ingredients: recipeData[0].ingredients,
        isFavorite: recipeData[0].isFavorite || false,
      };

      setRecipe(loadedRecipe);

      const loadedAuthor = {
        id: authorData[0]._id.$oid,
        name: authorData[0].name,
        isAuthenticated: true,
        avatar: authorData[0].avatar,
      };
      setAuthor(loadedAuthor);
    } catch (error) {
      console.error(error);
    }
  }, []);

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
    <Container>
      <RecipePageContainer>
        <Breadcrumbs />
        <RecipesPopular>
          {recipe && author && (
            <RecipeCard
              recipe={recipe}
              author={author}
              onSignIn={handleSignIn}
              onProfile={handleProfile}
              onToggleFavorite={handleToggleFavorite}
            />
          )}
          {recipeData.slice(1, 4).map(recipe => (
            <RecipeCard
              key={recipe._id.$oid}
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
          ))}
        </RecipesPopular>
      </RecipePageContainer>
    </Container>
  );
};

export default RecipePage;
