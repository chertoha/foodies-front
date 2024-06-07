import React from "react";
import {
  AuthorInfoContainer,
  AuthorName,
  RecipeMainInfoContainer,
  RecipeTitle,
} from "./RecipeMainInfo.styled";
import AvatarButton from "components/Buttons/AvatarButton";

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
      <RecipeTitle>{recipe.title}</RecipeTitle>
      <p>{recipe.category}</p>
      <p> {recipe.time}</p>
      <p>{recipe.description}</p>
      <AuthorInfoContainer>
        <AuthorName>Created by:</AuthorName>
        <AvatarButton
          author={author}
          onClick={handleAuthorClick}
        />
      </AuthorInfoContainer>
    </RecipeMainInfoContainer>
  );
};

export default RecipeMainInfo;
