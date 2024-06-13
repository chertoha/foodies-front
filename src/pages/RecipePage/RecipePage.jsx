import Breadcrumbs from "components/UIKit/Breadcrumbs";
import RecipesPopular from "../../components/RecipesPopular/RecipesPopular";
import Container from "../../components/Container/Container";
import { RecipePageContainer } from "./RecipePage.styled";
import RecipeInfo from "../../components/RecipeInfo/RecipeInfo";
import { useParams } from "react-router-dom";
import { useGetRecipeQuery } from "../../redux/recipes/recipesApi";

const RecipePage = () => {
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
        <RecipeInfo />
        <RecipesPopular />
      </RecipePageContainer>
    </Container>
  );
};

export default RecipePage;
