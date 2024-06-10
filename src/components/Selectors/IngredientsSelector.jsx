import { useState, useEffect } from "react";
import CustomSelect from "components/CustomSelect";

const IngredientSelector = () => {
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  // useEffect(() => {
  //   const fetchIngredients = async () => {
  //     try {
  //       const response = await axios.get("https://example.com/api/ingredients"); // Замініть URL на реальний
  //       setIngredients(response.data);
  //     } catch (error) {
  //       console.error("Error fetching ingredients:", error);
  //     }
  //   };

  //   fetchIngredients();
  // }, []);

  const handleSelectChange = event => {
    const selectedId = event.target.value;
    const ingredient = ingredients.find(ing => ing.id === parseInt(selectedId));
    setSelectedIngredient(ingredient);
  };

  return (
    <div>
      <CustomSelect
        name="ingredient"
        options={ingredients.map(ing => ({ value: ing.id, label: ing.name }))}
        value={selectedIngredient ? selectedIngredient.id : ""}
        onChange={handleSelectChange}
        placeholder="Select ingredient"
      />
    </div>
  );
};

export default IngredientSelector;
