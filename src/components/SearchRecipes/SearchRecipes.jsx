import { useState } from "react";
import { useGetIngredientsQuery } from "../../redux/ingredients/ingredientsApi";
import { useGetAreasQuery } from "../../redux/areas/areasApi";
import { Formik } from "formik";
import * as Yup from "yup";

import { SearchRecipesForm, SearchWrapp } from "./SearchRecipes.styled";
import CustomSelect from "../CustomSelect/CustomSelect";

const areasobj = ["Beef", "Breakfast", "Desserts", "Lamb"];
const ingredientsobj = ["Cabbage", "Cucumber", "Tomato", "Corn", "Radish", "Parsley"];

const initialValues = {
  ingredients: "",
  areas: "",
};
const validationSchema = Yup.object().shape({
  ingredients: Yup.string(),
  areas: Yup.string(),
});

const SearchRecipes = () => {
  const [ingredient, setIngredient] = useState("");
  const [area, setArea] = useState("");

  const { data, error, isFetching } = useGetIngredientsQuery();
  const { areas } = useGetAreasQuery();
  console.log("ingredient", data);
  console.log("areas", areas);

  const handleSubmit = values => {
    setIngredient(values.ingredients);
    setArea(values.areas);
  };
  console.log(ingredient);
  console.log(area);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {props => (
        <SearchRecipesForm onSubmit={props.handleSubmit}>
          <SearchWrapp>
            <CustomSelect
              name="ingredients"
              options={ingredientsobj.map(ingredient => ({
                value: ingredient,
                label: ingredient,
              }))}
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
              placeholder="Areas"
            />
          </SearchWrapp>
          <button type="submit">Search</button>
        </SearchRecipesForm>
      )}
    </Formik>
  );
};

export default SearchRecipes;
