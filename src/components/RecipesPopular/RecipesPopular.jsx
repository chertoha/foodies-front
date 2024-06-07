import React from "react";
import {
  RecipePopularContainer,
  RecipePopularTitle,
  RecipePopularList,
  RecipeListItem,
} from "./RecipesPopular.styled";

const RecipesPopular = ({ children }) => {
  return (
    <RecipePopularContainer>
      <RecipePopularTitle>Popular recipes</RecipePopularTitle>
      <RecipePopularList>
        {React.Children.map(children, child => (
          <RecipeListItem>{child}</RecipeListItem>
        ))}
      </RecipePopularList>
    </RecipePopularContainer>
  );
};

export default RecipesPopular;
