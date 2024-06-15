import SectionTitle from "components/SectionTitle";
import { useGetCategoriesQuery } from "../../redux/categories/categoriesApi";
import { SelectorCategories } from "./AddRecipeForm.styled";
// import CustomSelect from "components/CustomSelect";
// import { useState } from "react";
// import { StyledSelect } from "components/CustomSelect/CustomSelect.styled";
import { Controller, useFormContext } from "react-hook-form";
import CommonSelect from "components/UIKit/CommonSelect";

// export const CategoriesSelector = ({ register, errors }) => {
export const CategoriesSelector = () => {
  // const [selectedCategory, setSelectedCategory] = useState("");

  const { data: categories, error } = useGetCategoriesQuery({ limit: 1313 });
  // console.log(data?.result);
  // const handleCategoryChange = (_, value) => {
  //   setSelectedCategory(value);
  // };

  const {
    control,
    formState: { errors },
  } = useFormContext();

  // if (isLoading) return <div>Loading...</div>;
  if (error) return console.log(error);
  if (!categories) return null;

  // const options = data?.result?.map(({ name }) => ({
  //   value: name,
  //   label: name,
  // }));

  const options = [...categories.result.map(({ name }) => ({ value: name, label: name }))];

  return (
    <SelectorCategories>
      <SectionTitle label="Category" />

      <Controller
        name="category"
        control={control}
        render={({ field: { value, onChange } }) => (
          <CommonSelect
            currentValue={value}
            options={options}
            onChange={onChange}
            placeholder="Select a category"
          />
        )}
      />
      {/* <CustomSelect
        name="categorySelect"
        options={options}
        value={selectedCategory}
        onChange={handleCategoryChange}
        placeholder="Select a category"
        {...register("category")}
      /> */}
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
