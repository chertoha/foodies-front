import SectionTitle from "components/SectionTitle";
import { useGetCategoriesQuery } from "../../redux/categories/categoriesApi";
import { SelectorCategories } from "./AddRecipeForm.styled";
import CustomSelect from "components/CustomSelect";
import { useState } from "react";
import { StyledSelect } from "components/CustomSelect/CustomSelect.styled";
export const CategoriesSelector = ({ register, errors }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const { data, error, isLoading } = useGetCategoriesQuery();
  console.log(data?.result);
  const handleCategoryChange = (_, value) => {
    setSelectedCategory(value);
  };
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching categories</div>;

  const options = data?.result?.map(({ name }) => ({
    value: name,
    label: name,
  }));

  return (
    <SelectorCategories>
      <SectionTitle label="Category" />
      <CustomSelect
        options={options}
        value={selectedCategory}
        onChange={handleCategoryChange}
        placeholder="Select a category"
        {...register("category")}
      />
      {/* <select
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
      </select> */}
      {errors.category && <p>{errors.category.message}</p>}
    </SelectorCategories>
  );
};
