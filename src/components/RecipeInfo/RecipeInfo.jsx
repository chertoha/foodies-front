import { RecipeInfoContainer } from "./RecipeInfo.styled";
import RecipeMainInfo from "../RecipeMainInfo/RecipeMainInfo";
import RecipeIngredients from "../RecipeIngredients/RecipeIngredients";
import RecipePreparation from "../RecipePreparation/RecipePreparation";

const RecipeInfo = ({ recipe, author, onSignIn, onProfile, onToggleFavorite }) => {
  return (
    <RecipeInfoContainer>
      <RecipeMainInfo
        recipe={recipe}
        author={author}
        onSignIn={onSignIn}
        onProfile={onProfile}
      />
      <RecipeIngredients ingredients={recipe.ingredients} />
      <RecipePreparation
        preparation={recipe.instructions}
        isFavorite={recipe.isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </RecipeInfoContainer>
  );
};

export default RecipeInfo;
