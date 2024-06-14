import Breadcrumbs from "components/UIKit/Breadcrumbs";
import RecipesPopular from "../../components/RecipesPopular/RecipesPopular";
import Container from "../../components/Container/Container";
import { RecipePageContainer } from "./RecipePage.styled";
import RecipeInfo from "../../components/RecipeInfo/RecipeInfo";
import { useParams } from "react-router-dom";
import { useGetCurrentUserDataQuery, useGetRecipeQuery } from "../../redux/recipes/recipesApi";

import { createContext, useContext } from "react";

// const FavoritesContext = createContext({ favorites: [] });
// export const useFavoritesContext = () => useContext(FavoritesContext);

const RecipePage = () => {
  // const { data: favorites = [] } = useGetFavoriteRecipesQuery({ page: 1, limit: 10000 });
  // const { data: user } = useGetCurrentUserQuery();
  // const { data: user } = useGetCurrentUserDataQuery();

  const { id } = useParams();
  const { data: recipe, isLoading, error } = useGetRecipeQuery(id);

  // if (!user) return null;

  if (isLoading) {
    return null;
  }
  if (error) {
    return null;
  }

  // const favorites = user.favorites;

  return (
    <Container>
      {/* <FavoritesContext.Provider value={{ favorites }}> */}
      <RecipePageContainer>
        <Breadcrumbs current={recipe.title} />
        <RecipeInfo
          recipe={recipe}
          // favorites={favorites.result}
          // favorites={favorites}
        />
        <RecipesPopular
          recipe={recipe}
          // favorites={favorites.result}
          // favorites={favorites}
        />
      </RecipePageContainer>
      {/* </FavoritesContext.Provider> */}
    </Container>
  );
};

export default RecipePage;
