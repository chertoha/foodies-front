import SectionTitle from "components/SectionTitle";
import { useGetCategoriesQuery } from "../../redux/categories/categoriesApi";
import { SelectorCategories } from "./AddRecipeForm.styled";
import CustomSelect from "components/CustomSelect";
export const CategoriesSelector = ({ register, errors }) => {
  const { data } = useGetCategoriesQuery({ limit: 1111 });
  const onChange = value => {
    console.log(value);
  };

  return (
    <SelectorCategories>
      <SectionTitle label="Category" />
      <CustomSelect
        name="category"
        {...register("category")}
        options={data?.result?.map(({ name }) => ({
          value: name,
          label: name,
        }))}
        onChange={onChange}
        placeholder="Select a category"
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
