import { useState } from "react";
// import { useGetIngredientsQuery } from "../../redux/ingredients/ingredientsApi";
// import { useGetAreasQuery } from "../../redux/areas/areasApi";

import { SearchRecipesForm, SearchWrapp } from "./SearchRecipes.styled";
import CustomSelect from "../CustomSelect/CustomSelect";

const areasobj = ["Beef", "Breakfast", "Desserts", "Lamb"];
const ingredientsobj = ["Cabbage", "Cucumber", "Tomato", "Corn", "Radish", "Parsley"];

const SearchRecipes = () => {
  const [formValues, setFormValues] = useState({
    ingredients: "",
    areas: "",
  });
  //   const { data: ingredientsData } = useGetIngredientsQuery();
  //   const { data: areasData } = useGetAreasQuery();

  //   console.log(ingredientsData);
  //   console.log(areasData);
  const handleChange = (name, value) => {
    setFormValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log("Form submitted with values:", formValues);
  };

  return (
    <SearchRecipesForm onSubmit={handleSubmit}>
      <SearchWrapp>
        <CustomSelect
          name="ingredients"
          options={ingredientsobj.map(ingredient => ({
            value: ingredient,
            label: ingredient,
          }))}
          value={formValues.ingredients}
          onChange={handleChange}
          placeholder="Ingredients"
        />
      </SearchWrapp>
      <SearchWrapp>
        <CustomSelect
          name="areas"
          options={areasobj.map(area => ({
            value: area,
            label: area,
          }))}
          value={formValues.areas}
          onChange={handleChange}
          placeholder="Areas"
        />
      </SearchWrapp>
      {/* <button type="submit">Search</button> */}
    </SearchRecipesForm>
  );
};
export default SearchRecipes;
