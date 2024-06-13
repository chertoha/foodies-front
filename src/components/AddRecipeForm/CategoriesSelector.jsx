import { useGetCategoriesQuery } from "../../redux/categories/categoriesApi";
export const CategoriesSelector = ({ register, errors }) => {
  const { data } = useGetCategoriesQuery({ limit: 1111 });

  return (
    <>
      <label>
        Category:
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
      </label>

      {errors.category && <p>{errors.category.message}</p>}
    </>
  );
};
