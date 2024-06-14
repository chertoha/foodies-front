import React, { useState } from "react";
import { useGetIngredientsQuery } from "../../redux/ingredients/ingredientsApi";
import IngredientCard from "./IngredientSelectedCard";
import SpriteIcon from "components/UIKit/SpriteIcon";
import { IngredientsList } from "components/RecipeIngredients/RecipeIngredients.styled";
import {
  AddIngredientButton,
  IngredienQuantity,
  IngredientDescription,
  SelectorIngredientsContainer,
} from "./AddRecipeForm.styled";

import CustomSelect from "components/CustomSelect";

const IngredientSelector = ({
  selectedIngredients,
  setSelectedIngredients,
  // fields,
  // append,
  // remove,
}) => {
  const { data: ingredients, isLoading, isError } = useGetIngredientsQuery(); // Використовуємо RTK Query для отримання інгредієнтів

  const [selectedIngredient, setSelectedIngredient] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleIngredientChange = (_, value) => {
    setSelectedIngredient(value);
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
      // append({ ...ingredient, quantity });
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
      <IngredientDescription>
        <SelectorIngredientsContainer>
          <CustomSelect
            options={ingredients.result.map(({ name }) => ({
              value: name,
              label: name,
            }))}
            value={selectedIngredient}
            onChange={handleIngredientChange}
            placeholder="Add the ingredient"
          />
        </SelectorIngredientsContainer>

        <IngredienQuantity
          type="text"
          id="quantityInput"
          placeholder="Enter Quantity"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </IngredientDescription>
      <AddIngredientButton
        type="button"
        onClick={handleAddIngredient}
      >
        Add ingredient
        <SpriteIcon
          id="icon-plus"
          size={[20, 22, 22]}
        />
      </AddIngredientButton>
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
