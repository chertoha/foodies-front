import { useState } from "react";
import { useForm, useFieldArray, set } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./yupValidation";
import { FieldsInput } from "./InputFields.styled";
import { useCreateRecipeMutation } from "../../redux/recipes/recipesApi";
import {
  CookingCategory,
  DescriptionContainer,
  FieldsInputStyled,
  Form,
  FormTitles,
  ImageField,
  RecipeNameContainer,
  RecipeNameInput,
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
  const [ingredients, setIngredients] = useState([]);

  const [counter, setCounter] = useState(1);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [preview, setPreview] = useState(null);
  // const { data } = useGetCategoriesQuery({ limit: 1111 });

  const [createRecipe] = useCreateRecipeMutation();

  const onSubmit = data => {
    console.log({ ...data, cookTime: counter, ingredients: selectedIngredients, photo: preview });
    console.log(data.photo[0]);

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
    setSelectedIngredients([]);
    setCounter(1);
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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <ImageField>
        <ImageDropZone
          preview={preview}
          setPreview={setPreview}
          name="photo"
          validation={{ ...register("photo") }}
        />
      </ImageField>
      <FieldsInput>
        <FormTitles>
          <RecipeNameContainer>
            <RecipeNameInput
              $iserror={errors.title}
              placeholder={!errors.title ? "The name of the recipe" : "The title is required"}
              type="text"
              {...register("title")}
            />
          </RecipeNameContainer>
          <DescriptionContainer>
            <FieldsInputStyled
              $iserror={errors.description}
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
        </FormTitles>

        <CookingCategory>
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
        </CookingCategory>

        <RecipeIngredientsContainer>
          <SectionTitle label={"Ingredients"} />
          <div>
            <IngredientSelector
              selectedIngredients={selectedIngredients}
              setSelectedIngredients={setSelectedIngredients}
            />
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
        </RecipeIngredientsContainer>

        <DescriptionContainer>
          <label>
            Інструкція:
            <textarea {...register("instructions")}></textarea>
            <p>{`Символів: ${instructionsLength}/200`}</p>
          </label>
          {errors.instructions && <p>{errors.instructions.message}</p>}
        </DescriptionContainer>

        <div>
          <TrashButton
            type="button"
            onClick={handleReset}
          ></TrashButton>
          <ActiveButton
            label="Publish"
            type="submit"
          ></ActiveButton>
        </div>
      </FieldsInput>
    </Form>
  );
};

export default AddRecipeForm;
