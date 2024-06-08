import Breadcrumbs from "components/UIKit/Breadcrumbs";
import recipeData from "./recipe.json";
import authorData from "./users.json";
import RecipesPopular from "../../components/RecipesPopular/RecipesPopular";
import Container from "../../components/Container/Container";
import { RecipePageContainer } from "./RecipePage.styled";
import RecipeInfo from "../../components/RecipeInfo/RecipeInfo";

const RecipePage = () => {
  const recipeId = "6462a8f74c3d0ddd28897fcd";
  const recipe = recipeData.find(recipe => recipe._id.$oid === recipeId);
  const author = authorData.find(author => author._id.$oid === recipe.owner.$oid);

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
        <RecipesPopular
          list={recipeData}
          author={author}
        />
      </RecipePageContainer>
    </Container>
  );
};

export default RecipePage;
