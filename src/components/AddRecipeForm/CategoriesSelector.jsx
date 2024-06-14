import SectionTitle from "components/SectionTitle";
import { useGetCategoriesQuery } from "../../redux/categories/categoriesApi";
import { SelectorCategories } from "./CategoriesSelector.styled";
export const CategoriesSelector = ({ register, errors }) => {
  const { data } = useGetCategoriesQuery({ limit: 1111 });

  return (
    <SelectorCategories>
      <SectionTitle label="Category" />

      <select
        defaultValue="default"
        {...register("category")}
      >
        <option
          value="default"
          disabled
        >
          Select a category
        </option>
        {data?.result?.map(category => (
          <option
            key={category._id}
            value={category.name}
          >
            {category.name}
          </option>
        ))}
      </select>
      {errors.category && <p>{errors.category.message}</p>}
    </SelectorCategories>
  );
};
