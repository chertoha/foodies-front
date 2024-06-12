// import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useGetIngredientsQuery } from "../../redux/ingredients/ingredientsApi";
import { useGetAreasQuery } from "../../redux/areas/areasApi";
import { SearchRecipesForm, SearchWrapp } from "./SearchRecipes.styled";
import CustomSelect from "../CustomSelect/CustomSelect";

const SearchRecipes = ({ onChange }) => {
  const {
    register,
    handleSubmit,
    // setValue,
    watch,
    // reset,
    // formState: { errors },
  } = useForm();

  // const watchArea = watch("area");

  // const [ingredient, setIngredient] = useState("");
  // const [area, setArea] = useState("");

  const {
    data: ingredientsData,
    error: ingredientsError,
    isFetching: isFetchingIngredients,
  } = useGetIngredientsQuery();
  const { data: areasData, error: areasError, isFetching: isFetchingAreas } = useGetAreasQuery();

  const onSubmit = data => {
    onChange("ingredient", data.ingredient);
    onChange("area", data.area);
  };

  // Скидання значення інгредієнта, якщо вибрано нову область
  // useEffect(() => {
  //   if (watchArea) {
  //     reset({ ingredient: "" });
  //   }
  // }, [watchArea, reset]);

  // const handleChange = (name, value) => {
  //   if (name === "ingredient") {
  //     setIngredient(value);
  //   } else if (name === "area") {
  //     setArea(value);
  //     setIngredient("");
  //   }
  //   onChange(name, value);
  // };

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   onChange("ingredient", ingredient);
  //   onChange("area", area);
  // };

  if (isFetchingIngredients || isFetchingAreas) return <div>Loading...</div>;
  if (ingredientsError || areasError) return <div>Error loading categories.</div>;

  return (
    <SearchRecipesForm onSubmit={handleSubmit(onSubmit)}>
      <SearchWrapp>
        <CustomSelect
          name="ingredient"
          {...register("ingredient")}
          options={ingredientsData.result.map(({ name }) => ({
            value: name,
            label: name,
          }))}
          // value={ingredient}
          onChange={onChange}
          placeholder="Ingredients"
        />
      </SearchWrapp>
      <SearchWrapp>
        <CustomSelect
          name="area"
          {...register("area")}
          options={areasData.map(({ name }) => ({
            value: name,
            label: name,
          }))}
          // value={area}
          onChange={onChange}
          placeholder="Areas"
        />
      </SearchWrapp>
    </SearchRecipesForm>
  );
};

export default SearchRecipes;
