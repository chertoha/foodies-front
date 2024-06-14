import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./yupValidation";
import { FieldsInput } from "./InputFields.styled";
import { useCreateRecipeMutation } from "../../redux/recipes/recipesApi";
import {
  DescriptionContainer,
  FieldsInputStyled,
  Form,
  RecipeNameContainer,
} from "./AddRecipeForm.styled";
import ActiveButton from "components/Buttons/ActiveButton";
import TrashButton from "components/Buttons/TrashButton";
import { RecipeIngredientsContainer } from "components/RecipeIngredients/RecipeIngredients.styled";
import SectionTitle from "components/SectionTitle";
import IngredientSelector from "./IngredientSelected";
import ImageDropZone from "components/ImageDropZone";
import { CategoriesSelector } from "./CategoriesSelector";
import { Counter } from "components/Counter/Counter";

const AddRecipeForm = () => {
  const {
    register,
    handleSubmit,
    control,
    _setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { fields, _append, _remove } = useFieldArray({
    control,
    name: "ingredients",
  });

  const [_categories, _setCategories] = useState([]);
  const [ingredients, _setIngredients] = useState([]);
  const [_preview, setPreview] = useState(null);
  const [counter, setCounter] = useState(1);
  // const { data } = useGetCategoriesQuery({ limit: 1111 });

  const [createRecipe] = useCreateRecipeMutation();
  // useEffect(() => {
  //   // Отримання категорій з backend
  //   axiosBaseQuery("/api/categories").then(response => {
  //     setCategories(response.data);
  //   });

  //   // Отримання інгредієнтів з backend
  //   axiosBaseQuery("/api/ingredients").then(response => {
  //     setIngredients(response.data);
  //   });
  // }, []);

  const onSubmit = data => {
    console.log({ ...data, cookTime: counter });
    try {
      const formData = new FormData();
      Object.keys(data).forEach(key => {
        if (key === "ingredients") {
          data[key].forEach((ingredient, index) => {
            formData.append(`ingredients[${index}][ingredient]`, ingredient.ingredient);
            formData.append(`ingredients[${index}][amount]`, ingredient.amount);
          });
        } else {
          formData.append(key, data[key]);
        }
      });
      // console.log(formData);
      // createRecipe(formData);

      // const response = await axiosBaseQuery("/api/recipes", formData);
      // if (response.status === 200) {
      //   // Перенаправлення на сторінку користувача
      //   window.location.href = "/user";
      // }
    } catch (error) {
      alert("Помилка: " + error.message);
    }
  };

  const handleReset = () => {
    reset();
    setPreview(null);
  };

  // const handlePhotoChange = e => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setPreview(URL.createObjectURL(file));
  //     setValue("photo", file);
  //   }
  // };

  const descriptionLength = watch("description")?.length || 0;
  const instructionsLength = watch("instructions")?.length || 0;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ImageDropZone
        name="photo"
        validation={{ ...register("photo") }}
      />
      <FieldsInput>
        <RecipeNameContainer>
          <FieldsInputStyled
            iserror={errors.title}
            placeholder={!errors.title ? "The name of the recipe" : "The title is required"}
            type="text"
            {...register("title")}
          />
        </RecipeNameContainer>

        <DescriptionContainer>
          <FieldsInputStyled
            iserror={errors.description}
            placeholder={
              !errors.description
                ? "Enter a description of the dish"
                : "The description is required"
            }
            type="text"
            {...register("description")}
          />

          <p>{`${descriptionLength}/200`}</p>
        </DescriptionContainer>

        <CategoriesSelector
          register={register}
          errors={errors}
        />

        <Counter
          register={register}
          errors={errors}
          count={counter}
          setCount={setCounter}
        />

        {/* <RecipeIngredientsContainer>
          <SectionTitle label={"Ingredients"} />
          <div>
            <IngredientSelector />
          </div>

          {fields.map((field, index) => (
            <div key={field.id}>
              <select {...register(`ingredients.${index}.ingredient`)}>
                {ingredients.map(ingredient => (
                  <option
                    key={ingredient.id}
                    value={ingredient.name}
                  >
                    {ingredient.name}
                  </option>
                ))}
              </select>
              <input
                type="number"
                {...register(`ingredients.${index}.amount`)}
              />
            </div>
          ))}
        </RecipeIngredientsContainer> */}

        {/* <div>
          <label>
            Інструкція:
            <textarea {...register("instructions")}></textarea>
            <p>{`Символів: ${instructionsLength}/200`}</p>
          </label>
          {errors.instructions && <p>{errors.instructions.message}</p>}
        </div> */}

        <div>
          {/* <TrashButton
            type="button"
            onClick={handleReset}
          ></TrashButton> */}
          {/* <ActiveButton
            label="Publish"
            type="submit"
          ></ActiveButton> */}
        </div>
      </FieldsInput>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddRecipeForm;
