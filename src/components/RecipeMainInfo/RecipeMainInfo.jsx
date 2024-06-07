import React from "react";
import { RecipeMainInfoContainer } from "./RecipeMainInfo.styled";

const RecipeMainInfo = ({ recipe, author, onSignIn, onProfile }) => {
  const handleAuthorClick = () => {
    if (author.isAuthenticated) {
      onProfile(author.id);
    } else {
      onSignIn();
    }
  };
  return (
    <RecipeMainInfoContainer>
      <img
        src={recipe.thumb}
        alt={recipe.title}
      />
      <h1>{recipe.title}</h1>
      <p>Category: {recipe.category}</p>
      <p>{recipe.description}</p>
      <button onClick={handleAuthorClick}>{author.name}</button>
    </RecipeMainInfoContainer>
  );
};

export default RecipeMainInfo;
