import React, { useState, useEffect } from "react";
import Breadcrumbs from "components/UIKit/Breadcrumbs";
import recipeData from "./recipe.json";
import authorData from "./users.json";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import RecipesPopular from "../../components/RecipesPopular/RecipesPopular";
import Container from "../../components/Container/Container";
import { RecipePageContainer } from "./RecipePage.styled";
import RecipeInfo from "../../components/RecipeInfo/RecipeInfo";

const RecipePage = () => {
  const [recipe, setRecipe] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const recipeId = "6462a8f74c3d0ddd28897fcd";
    try {
      const loadedRecipe = recipeData.find(recipe => recipe._id.$oid === recipeId);
      const loadedAuthor = authorData.find(author => author._id.$oid === loadedRecipe.owner.$oid);

      setRecipe({
        id: loadedRecipe._id.$oid,
        title: loadedRecipe.title,
        description: loadedRecipe.description,
        category: loadedRecipe.category,
        thumb: loadedRecipe.thumb,
        instructions: loadedRecipe.instructions,
        time: loadedRecipe.time,
        ingredients: loadedRecipe.ingredients,
        isFavorite: loadedRecipe.isFavorite || false,
      });

      setAuthor({
        id: loadedAuthor._id.$oid,
        name: loadedAuthor.name,
        isAuthenticated: true,
        avatar: loadedAuthor.avatar,
      });
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
        <Breadcrumbs current={recipe ? recipe.title : "Loading..."} />

        {recipe && author && (
          <RecipeInfo
            recipe={recipe}
            author={author}
            onSignIn={handleSignIn}
            onProfile={handleProfile}
            onToggleFavorite={handleToggleFavorite}
          />
        )}
        <RecipesPopular>
          {recipeData.slice(0, 4).map(recipe => (
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
