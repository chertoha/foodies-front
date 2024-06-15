import { useGetIngredientsQuery } from "../../redux/ingredients/ingredientsApi";
import { useGetAreasQuery } from "../../redux/areas/areasApi";
import { SearchRecipesForm, SearchWrapp } from "./SearchRecipes.styled";
import CustomSelect from "../CustomSelect/CustomSelect";

const SearchRecipes = ({ onChange, selectedArea, selectedIngredient }) => {
  const {
    data: ingredientsData,
    error: ingredientsError,
    isFetching: isFetchingIngredients,
  } = useGetIngredientsQuery();
  const { data: areasData, error: areasError, isFetching: isFetchingAreas } = useGetAreasQuery();

  if (isFetchingIngredients || isFetchingAreas) return <div>Loading...</div>;
  if (ingredientsError || areasError) return <div>Error loading categories.</div>;

  return (
    <SearchRecipesForm>
      <SearchWrapp>
        <CustomSelect
          name="ingredient"
          options={[
            { value: "", label: "All ingredients" },
            ...ingredientsData.result.map(({ name }) => ({ value: name, label: name })),
          ]}
          value={selectedIngredient}
          onChange={onChange}
          placeholder="Ingredients"
        />
      </SearchWrapp>
      <SearchWrapp>
        <CustomSelect
          name="area"
          options={[
            { value: "", label: "All areas" },
            ...areasData.map(({ name }) => ({ value: name, label: name })),
          ]}
          value={selectedArea}
          onChange={onChange}
          placeholder="Areas"
        />
      </SearchWrapp>
    </SearchRecipesForm>
  );
};

export default SearchRecipes;
