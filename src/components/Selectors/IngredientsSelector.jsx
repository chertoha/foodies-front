import { api, BASE_URL, axiosBaseQuery } from "../services/api";
import { useState, useEffect } from "react";
import axios from "axios";

axiosBaseQuery(BASE_URL);
console.log(axiosBaseQuery);

const IngredientSelector = () => {
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await axios.get("https://example.com/api/ingredients"); // Замініть URL на реальний
        setIngredients(response.data);
      } catch (error) {
        console.error("Error fetching ingredients:", error);
      }
    };

    fetchIngredients();
  }, []);

  const handleSelectChange = event => {
    const selectedId = event.target.value;
    const ingredient = ingredients.find(ing => ing.id === parseInt(selectedId));
    setSelectedIngredient(ingredient);
  };

  return (
    <div>
      <h1>Ingredient Selector</h1>
      <select onChange={handleSelectChange}>
        <option value="">Select an ingredient</option>
        {ingredients.map(ingredient => (
          <option
            key={ingredient.id}
            value={ingredient.id}
          >
            {ingredient.name}
          </option>
        ))}
      </select>

      {selectedIngredient && (
        <div style={{ marginTop: "20px" }}>
          <h2>{selectedIngredient.name}</h2>
          <img
            src={selectedIngredient.image}
            alt={selectedIngredient.name}
          />
        </div>
      )}
    </div>
  );
};

export default IngredientSelector;
