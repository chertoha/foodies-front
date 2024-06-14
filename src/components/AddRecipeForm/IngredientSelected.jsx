import { useState } from "react";
import { useGetIngredientsQuery } from "../../redux/ingredients/ingredientsApi";
import IngredientCard from "./IngredientSelectedCard";
import SpriteIcon from "components/UIKit/SpriteIcon";
import { IngredientsList } from "components/RecipeIngredients/RecipeIngredients.styled";

const IngredientSelector = ({ selectedIngredients, setSelectedIngredients }) => {
  const { data: ingredients, isLoading, isError } = useGetIngredientsQuery(); // Використовуємо RTK Query для отримання інгредієнтів

  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleIngredientChange = event => {
    setSelectedIngredient(event.target.value);
  };

  const handleQuantityChange = event => {
    setQuantity(event.target.value);
  };

  const handleAddIngredient = () => {
    const isExist = selectedIngredients.some(ing => ing.name === selectedIngredient);
    if (isExist) {
      alert("This ingredient is already added");
      return;
    }
    const ingredient = ingredients.result.find(ing => ing.name === selectedIngredient);
    if (ingredient) {
      const newSelectedIngredients = [...selectedIngredients, { ...ingredient, quantity }];
      setSelectedIngredients(newSelectedIngredients);
      // setSelectedIngredient("");
      // setQuantity("");
    }
  };

  const handleDeleteIngredient = id => {
    const newSelectedIngredients = selectedIngredients.filter(ing => ing._id !== id);
    setSelectedIngredients(newSelectedIngredients);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching ingredients</div>;
  if (!ingredients) return null;

  return (
    <>
      {" "}
      <label htmlFor="ingredientSelect">Виберіть інгредієнт:</label>
      <select
        id="ingredientSelect"
        defaultValue={"default"}
        onChange={handleIngredientChange}
        style={{ margin: "10px", padding: "5px", fontSize: "16px" }}
      >
        <option
          value="default"
          disabled
        >
          Add the ingredient
        </option>

        {ingredients.result.map(ingredient => (
          <option
            key={ingredient._id}
            value={ingredient.name}
          >
            {ingredient.name}
          </option>
        ))}
      </select>
      <label htmlFor="quantityInput">Quantity:</label>
      <input
        type="text"
        id="quantityInput"
        value={quantity}
        onChange={handleQuantityChange}
        style={{ margin: "10px", padding: "5px", fontSize: "16px", width: "80px" }}
      />
      <button
        type="button"
        onClick={handleAddIngredient}
        style={{ marginLeft: "10px", padding: "5px", fontSize: "16px" }}
      >
        Add ingredient
        <SpriteIcon
          id="icon-plus"
          size={[20, 22, 22]}
        />
      </button>
      <IngredientsList>
        {selectedIngredients.map(ingredient => (
          <IngredientCard
            key={ingredient._id}
            ingredient={ingredient}
            onDelete={handleDeleteIngredient}
          />
        ))}
      </IngredientsList>
    </>
  );
};

export default IngredientSelector;
