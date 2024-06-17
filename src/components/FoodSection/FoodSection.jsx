import Category from "components/Category/Category";
import { Suspense, lazy } from "react";
import { useSearchParams } from "react-router-dom";

const RecipesComponent = lazy(() => import("../RecipesComponent/RecipesComponent"));

const FoodSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "";

  const handleSelectCategory = category => {
    setSearchParams({ category });
  };

  return category === "" ? (
    <Category onSelectCategory={handleSelectCategory} />
  ) : (
    <Suspense>
      <RecipesComponent category={category} />
    </Suspense>
  );
};

export default FoodSection;
