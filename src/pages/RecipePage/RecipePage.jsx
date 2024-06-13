import Breadcrumbs from "components/UIKit/Breadcrumbs";
import RecipesPopular from "../../components/RecipesPopular/RecipesPopular";
import Container from "../../components/Container/Container";
import { RecipePageContainer } from "./RecipePage.styled";
import RecipeInfo from "../../components/RecipeInfo/RecipeInfo";
import { useParams } from "react-router-dom";
import { useGetFavoriteRecipesQuery, useGetRecipeQuery } from "../../redux/recipes/recipesApi";

const RecipePage = () => {
  const { data: favorites = [] } = useGetFavoriteRecipesQuery({ page: 1, limit: 10000 });

  const { id } = useParams();
  const { data: recipe, isLoading, error } = useGetRecipeQuery(id);

  if (isLoading) {
    return null;
  }
  if (error) {
    return null;
  }
  return (
    <Container>
      <RecipePageContainer>
        <Breadcrumbs current={recipe.title} />
        <RecipeInfo
          recipe={recipe}
          favorites={favorites.result}
        />
        <RecipesPopular />
      </RecipePageContainer>
    </Container>
  );
};

export default RecipePage;
