import React from "react";
import { RecipePopularContainer, RecipePopularList, RecipeListItem } from "./RecipesPopular.styled";
import SectionTitle from "components/SectionTitle";

const RecipesPopular = ({ children }) => {
  return (
    <RecipePopularContainer>
      <SectionTitle label={"Popular recipes"} />
      <RecipePopularList>
        {React.Children.map(children, child => (
          <RecipeListItem>{child}</RecipeListItem>
        ))}
      </RecipePopularList>
    </RecipePopularContainer>
  );
};

export default RecipesPopular;
