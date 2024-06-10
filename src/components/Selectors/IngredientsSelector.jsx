import { useState } from "react";
import CustomSelect from "components/CustomSelect";
import { useGetIngredientsQuery } from "../../redux/ingredients/ingredientsApi";

const IngredientSelector = () => {
  const { data: ingredients = [], isLoading, isError } = useGetIngredientsQuery(); // Використовуємо RTK Query для отримання інгредієнтів

  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleIngredientChange = event => {
    setSelectedIngredient(event.target.value);
  };

  const handleQuantityChange = event => {
    setQuantity(event.target.value);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching ingredients</div>;

  return (
    <div>
      <label htmlFor="ingredientSelect">Виберіть інгредієнт:</label>
      {ingredients.length > 0 ? (
        <select
          id="ingredientSelect"
          value={selectedIngredient}
          onChange={handleIngredientChange}
          style={{ margin: "10px", padding: "5px", fontSize: "16px" }}
        >
          <option value="">--Виберіть інгредієнт--</option>
          {ingredients.map(ingredient => (
            <option
              key={ingredient.id}
              value={ingredient.id}
            >
              {ingredient.name}
            </option>
          ))}
        </select>
      ) : (
        <div>No ingredients available</div>
      )}

      <label htmlFor="quantityInput">Кількість:</label>
      <input
        type="number"
        id="quantityInput"
        value={quantity}
        onChange={handleQuantityChange}
        style={{ margin: "10px", padding: "5px", fontSize: "16px", width: "80px" }}
      />

      <div>
        <p>Вибраний інгредієнт: {selectedIngredient}</p>
        <p>Кількість: {quantity}</p>
      </div>
    </div>
  );
};

export default IngredientSelector;
