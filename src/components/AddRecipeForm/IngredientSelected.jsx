import { useState } from "react";
import { useGetIngredientsQuery } from "../../redux/ingredients/ingredientsApi";
import IngredientCard from "./IngredientSelectedCard";

const IngredientSelector = () => {
  const { data: ingredients = [], isLoading, isError } = useGetIngredientsQuery(); // Використовуємо RTK Query для отримання інгредієнтів

  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [quantity, setQuantity] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const handleIngredientChange = event => {
    setSelectedIngredient(event.target.value);
  };

  const handleQuantityChange = event => {
    setQuantity(event.target.value);
  };

  const handleAddIngredient = () => {
    const ingredient = ingredients.find(ing => ing.id === selectedIngredient);
    if (ingredient) {
      const newSelectedIngredients = [...selectedIngredients, { ...ingredient, quantity }];
      setSelectedIngredients(newSelectedIngredients);
      setSelectedIngredient("");
      setQuantity("");
    }
  };

  const handleDeleteIngredient = id => {
    const newSelectedIngredients = selectedIngredients.filter(ing => ing.id !== id);
    setSelectedIngredients(newSelectedIngredients);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching ingredients</div>;

  return (
    <>
      {" "}
      <label htmlFor="ingredientSelect">Виберіть інгредієнт:</label>
      <select
        id="ingredientSelect"
        value={selectedIngredient}
        onChange={handleIngredientChange}
        style={{ margin: "10px", padding: "5px", fontSize: "16px" }}
      >
        {<option value=""></option>}
        {ingredients.map(ingredient => (
          <option
            key={ingredient.id}
            value={ingredient.id}
          >
            {ingredient.name}
          </option>
        ))}
      </select>
      <label htmlFor="quantityInput">Кількість:</label>
      <input
        type="number"
        id="quantityInput"
        value={quantity}
        onChange={handleQuantityChange}
        style={{ margin: "10px", padding: "5px", fontSize: "16px", width: "80px" }}
      />
      <button
        onClick={handleAddIngredient}
        style={{ marginLeft: "10px", padding: "5px", fontSize: "16px" }}
      >
        Додати інгредієнт
      </button>
      <div>
        {selectedIngredients.map(ingredient => (
          <IngredientCard
            key={ingredient.id}
            ingredient={ingredient}
            onDelete={handleDeleteIngredient}
          />
        ))}
      </div>
    </>
  );
};

export default IngredientSelector;
