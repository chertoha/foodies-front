import SectionTitle from "components/SectionTitle";
import CommonSelect from "components/UIKit/CommonSelect";
import { useGetCategoriesQuery } from "../../redux/categories/categoriesApi";
import { SelectorCategories } from "./AddRecipeForm.styled";
import { Controller, useFormContext } from "react-hook-form";

export const CategoriesSelector = () => {
  const { data: categories, error } = useGetCategoriesQuery({ limit: 1313 });

  const {
    control,
    formState: { errors },
  } = useFormContext();

  if (error) return console.log(error);
  if (!categories) return null;

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

      {errors.category && <p>{errors.category.message}</p>}
    </SelectorCategories>
  );
};
