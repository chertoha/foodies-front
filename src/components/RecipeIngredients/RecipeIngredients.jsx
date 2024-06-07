import { RecipeIngredientsContainer } from "./RecipeIngredients.styled";

const RecipeIngredients = ({ ingredients }) => {
  return (
    <RecipeIngredientsContainer>
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            <img
              src={`path/to/ingredient/image/${ingredient.id}.jpg`}
              alt={ingredient.id}
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
