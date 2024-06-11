import React from "react";
import {
  AuthorInfoWrapper,
  AuthorTextWrapper,
  ButtonWrapper,
  CreatedByText,
  OwnerTitle,
  RecipeCategory,
  RecipeMainInfoContainer,
  RecipeTime,
} from "./RecipeMainInfo.styled";
import AvatarButton from "components/Buttons/AvatarButton";
import SectionTitle from "components/SectionTitle";
import SubTitle from "components/SubTitle";

const RecipeMainInfo = ({ recipe, isAuthenticated }) => {
  const recipeOwner = recipe.owner;
  return (
    <RecipeMainInfoContainer>
      <SectionTitle label={recipe.title} />
      <ButtonWrapper>
        <RecipeCategory>{recipe.category}</RecipeCategory>
        <RecipeTime> {recipe.time} min</RecipeTime>
      </ButtonWrapper>
      <SubTitle label={recipe.description} />
      <AuthorInfoWrapper>
        <AvatarButton
          author={recipeOwner}
          isAuthenticated={isAuthenticated}
          showName={false}
        />
        <AuthorTextWrapper>
          <CreatedByText>Created by:</CreatedByText>
          <OwnerTitle>{recipeOwner.name}</OwnerTitle>
        </AuthorTextWrapper>
      </AuthorInfoWrapper>
    </RecipeMainInfoContainer>
  );
};

export default RecipeMainInfo;
