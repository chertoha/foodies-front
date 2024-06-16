import Category from "components/Category/Category";
import RecipesComponent from "components/RecipesComponent";
import { useSearchParams } from "react-router-dom";

const FoodSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "";
  // const area = searchParams.get("area") || "";
  // const ingredient = searchParams.get("ingredient") || "";

  const handleSelectCategory = category => {
    // setSearchParams({ category, area: "", ingredient: "" });
    setSearchParams({ category });
  };

  // const handleFiltersChange = (name, value) => {
  //   const newParams = { category, area, ingredient, [name]: value };
  //   setSearchParams(newParams);
  // };

  return category === "" ? (
    <Category onSelectCategory={handleSelectCategory} />
  ) : (
    <RecipesComponent
      category={category}
      // area={area}
      // ingredient={ingredient}
      // onFiltersChange={handleFiltersChange}
    />
  );
};

export default FoodSection;
