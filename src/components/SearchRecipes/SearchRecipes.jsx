import { useEffect, useState } from "react";
import { useGetIngredientsQuery } from "../../redux/ingredients/ingredientsApi";
import { useGetAreasQuery } from "../../redux/areas/areasApi";
import { SearchRecipesForm, SearchWrapp } from "./SearchRecipes.styled";
import CustomSelect from "../CustomSelect/CustomSelect";

const SearchRecipes = ({ onChange }) => {
  const [ingredient, setIngredient] = useState("");
  const [area, setArea] = useState("");

  const {
    data: ingredientsData,
    error: ingredientsError,
    isFetching: isFetchingIngredients,
  } = useGetIngredientsQuery();
  const { data: areasData, error: areasError, isFetching: isFetchingAreas } = useGetAreasQuery();

  const handleChange = (name, value) => {
    if (name === "ingredient") {
      setIngredient(value);
    } else if (name === "area") {
      setArea(value);
    }
    onChange(name, value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onChange("ingredient", ingredient);
    onChange("area", area);
  };

  // console.log("ingredient", ingredient);
  // console.log("area", area);

  if (isFetchingIngredients || isFetchingAreas) return <div>Loading...</div>;
  if (ingredientsError || areasError) return <div>Error loading categories.</div>;

  return (
    <SearchRecipesForm onSubmit={handleSubmit}>
      <SearchWrapp>
        <CustomSelect
          name="ingredient"
          options={ingredientsData.result.map(({ name }) => ({
            value: name,
            label: name,
          }))}
          value={ingredient}
          onChange={handleChange}
          placeholder="Ingredients"
        />
      </SearchWrapp>
      <SearchWrapp>
        <CustomSelect
          name="area"
          options={areasData.map(({ name }) => ({
            value: name,
            label: name,
          }))}
          value={area}
          onChange={handleChange}
          placeholder="Areas"
        />
      </SearchWrapp>
    </SearchRecipesForm>
  );
};

export default SearchRecipes;
