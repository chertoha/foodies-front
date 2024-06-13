import SectionTitle from "components/SectionTitle";
import {
  ImageWrapper,
  IngredientItem,
  IngredientsList,
  IngredientsWrapper,
  RecipeIngredientsContainer,
} from "./RecipeIngredients.styled";

const RecipeIngredients = ({ ingredients }) => {
  console.log(ingredients);

  return (
    <RecipeIngredientsContainer>
      <SectionTitle label={"Ingredients"} />
      <IngredientsList>
        {ingredients.map((ingredient, index) => (
          <IngredientItem key={index}>
            <ImageWrapper>
              <img
                src={ingredient.img}
                alt={ingredient.name}
              />
            </ImageWrapper>
            <IngredientsWrapper>
              <span>{ingredient.name}</span>
              <p>{ingredient.measure}</p>
            </IngredientsWrapper>
          </IngredientItem>
        ))}
      </IngredientsList>
    </RecipeIngredientsContainer>
  );
};

export default RecipeIngredients;
