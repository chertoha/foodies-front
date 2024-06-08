import { RecipeContentWrapper, RecipeImageWrapper, RecipeInfoContainer } from "./RecipeInfo.styled";
import RecipeMainInfo from "../RecipeMainInfo/RecipeMainInfo";
import RecipeIngredients from "../RecipeIngredients/RecipeIngredients";
import RecipePreparation from "../RecipePreparation/RecipePreparation";
import RecipeImage from "components/RecipeImage";

const RecipeInfo = ({ recipe, author, onSignIn, onProfile, onToggleFavorite }) => {
  return (
    <RecipeInfoContainer>
      <RecipeImageWrapper>
        <RecipeImage
          src={recipe.thumb}
          alt={recipe.title}
        />
      </RecipeImageWrapper>
      <RecipeContentWrapper>
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
      </RecipeContentWrapper>
    </RecipeInfoContainer>
  );
};

export default RecipeInfo;
