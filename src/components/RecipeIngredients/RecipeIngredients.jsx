import { IngredientsTitle, RecipeIngredientsContainer } from "./RecipeIngredients.styled";

const RecipeIngredients = ({ ingredients }) => {
  return (
    <RecipeIngredientsContainer>
      <IngredientsTitle>Ingredients</IngredientsTitle>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            <img
              src={ingredient.id}
              alt={ingredient.name}
            />
            <span>{ingredient.id}</span>
            <span>{ingredient.measure}</span>
          </li>
        ))}
      </ul>
    </RecipeIngredientsContainer>
  );
};

export default RecipeIngredients;
