import RecipeMainInfo from "../RecipeMainInfo/RecipeMainInfo";
import RecipeIngredients from "../RecipeIngredients/RecipeIngredients";
import RecipePreparation from "../RecipePreparation/RecipePreparation";
import {
  Image,
  RecipeContentWrapper,
  RecipeImageWrapper,
  RecipeInfoContainer,
} from "./RecipeInfo.styled";
import { useGetRecipeQuery } from "../../redux/recipes/recipesApi";
import { useParams } from "react-router-dom";
import { useGetIngredientsQuery } from "../../redux/ingredients/ingredientsApi";

const RecipeInfo = ({ author, onSignIn }) => {
  const { id } = useParams();
  const { data: recipe, error: recipeError, isLoading: isRecipeLoading } = useGetRecipeQuery(id);
  const {
    data: ingredients,
    error: ingredientsError,
    isLoading: isIngredientsLoading,
  } = useGetIngredientsQuery();

  if (!recipe || !ingredients) {
    return <p>''</p>;
  }
  if (recipeError || ingredientsError) {
    return <p>Error</p>;
  }
  if (isRecipeLoading || isIngredientsLoading) {
    return <p>Loading...</p>;
  }
  const ingredientsData = ingredients.result;

  const recipeIngredients = recipe.ingredients.map(recipeIngredient => {
    const fullIngredient = ingredientsData.find(
      ingredient =>
        ingredient._id === recipeIngredient.id || ingredient._id === recipeIngredient._id
    );

    return {
      ...recipeIngredient,
      img: fullIngredient ? fullIngredient.img : "",
      desc: fullIngredient ? fullIngredient.desc : "",
    };
  });

  return (
    <RecipeInfoContainer>
      <RecipeImageWrapper>
        <Image
          src={recipe.thumb}
          alt={recipe.title}
        />
      </RecipeImageWrapper>
      <RecipeContentWrapper>
        <RecipeMainInfo
          recipe={recipe}
          author={author}
          onSignIn={onSignIn}
        />
        <RecipeIngredients ingredients={recipeIngredients} />
        <RecipePreparation
          preparation={recipe.instructions}
          recipeId={recipe._id}
        />
      </RecipeContentWrapper>
    </RecipeInfoContainer>
  );
};

export default RecipeInfo;
