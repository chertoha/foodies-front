import { useState } from "react";
import { useForm, useFieldArray, _set, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addRecipeSchema, schema } from "./yupValidation";
import { useCreateRecipeMutation } from "../../redux/recipes/recipesApi";
import {
  FieldsInput,
  ButtonsWrapper,
  CookingCategory,
  DescriptionContainer,
  FieldsInputStyled,
  Form,
  FormTitles,
  ImageField,
  InstructionContainer,
  InstructionCounterWrapper,
  InstructionWrapper,
  RecipeNameContainer,
  RecipeNameInput,
  FormFields,
  InputSymbolsCounter,
} from "./AddRecipeForm.styled";
import ActiveButton from "components/Buttons/ActiveButton";
import TrashButton from "components/Buttons/TrashButton";
import { RecipeIngredientsContainer } from "components/RecipeIngredients/RecipeIngredients.styled";
import SectionTitle from "components/SectionTitle";
import IngredientSelector from "./IngredientSelected";
import ImageDropZone from "components/ImageDropZone/ImageDropZone";
import { CategoriesSelector } from "./CategoriesSelector";
import { Counter } from "components/Counter/Counter";
import AreaSelector from "./AreaSelector";
import { toast } from "react-toastify";
import Loader from "components/Loader";

const initialValues = {
  title: "",
  description: "",
  instructions: "",
  category: "",
  area: "",
  ingredients: [],
  thumb: null,
  time: 1,
};

const testInitialValues = {
  thumb: null,
  title: "Recipe-Anatolii-1",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  time: 13,
  category: "Seafood",
  area: "Irish",
  ingredients: [{ name: "Olive Oil", measure: "400gr" }],
  instructions:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, aliquam rerum corporis quia, ea hic quas recusandae facilis mollitia, rem earum! Adipisci repudiandae enim delenitihil.",
};

const AddRecipeForm = () => {
  const methods = useForm({
    resolver: yupResolver(addRecipeSchema),
    // defaultValues: initialValues,
    defaultValues: testInitialValues,
  });

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = methods;

  // const { fields, append, _remove } = useFieldArray({
  //   control,
  //   name: "ingredients",
  // });

  // const [counter, setCounter] = useState(1);
  // const [selectedIngredients, setSelectedIngredients] = useState([]);
  // const [preview, setPreview] = useState(null);
  // const { data } = useGetCategoriesQuery({ limit: 1111 });

  const [createRecipe, { isLoading }] = useCreateRecipeMutation();

  const onSubmit = async data => {
    // console.log({ ...data, cookTime: counter, ingredients: selectedIngredients, photo: preview });

    // console.log(data.photo[0]);
    // data.ingredients = selectedIngredients;
    // console.log(data);
    try {
      const formData = new FormData();
      Object.keys(data).forEach(key => {
        if (key === "ingredients") {
          data[key].forEach((ingredient, index) => {
            formData.append(`ingredients[${index}][name]`, ingredient.name);
            formData.append(`ingredients[${index}][measure]`, ingredient.quantity);
          });
        } else {
          formData.append(key, data[key]);
        }
      });

      await createRecipe(formData).unwrap();
      reset();

      // const response = await axiosBaseQuery("/api/recipes", formData);
      // if (response.status === 200) {
      //   // Перенаправлення на сторінку користувача
      //   window.location.href = "/user";
      // }
    } catch (error) {
      // alert("Помилка: " + error.message);
      toast.error(`Error: ${error.message}`);
    }
  };

  // const handleReset = () => {
  //   reset();
  //   // setPreview(null);
  //   // setSelectedIngredients([]);
  //   // setCounter(1);
  //   setValue("time", 1);
  // };

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
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {isLoading && <Loader />}
        <ImageField>
          <ImageDropZone
            // preview={preview}
            // setPreview={setPreview}
            name="thumb"
            // validation={{ ...register("thumb") }}
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
          </FormTitles>

          <FormFields>
            <DescriptionContainer>
              <FieldsInputStyled
                maxLength={200}
                $iserror={errors.description}
                placeholder={
                  !errors.description
                    ? "Enter a description of the dish"
                    : "The description is required"
                }
                type="text"
                {...register("description")}
              />

              <InputSymbolsCounter>{`${descriptionLength}/200`}</InputSymbolsCounter>
            </DescriptionContainer>

            <CookingCategory>
              <CategoriesSelector
              // register={register}
              // errors={errors}
              />

              <Counter
              // register={register}
              // errors={errors}
              // count={counter}
              // setCount={setCounter}
              />
            </CookingCategory>

            <div>
              <AreaSelector />
            </div>

            <RecipeIngredientsContainer>
              <SectionTitle label={"Ingredients"} />

              <IngredientSelector
              // fields={fields}
              // append={append}
              // selectedIngredients={selectedIngredients}
              // setSelectedIngredients={setSelectedIngredients}
              // {...register("ingredients")}
              />
            </RecipeIngredientsContainer>

            <InstructionWrapper>
              <SectionTitle label={"Recipe Preparation"} />

              <InstructionCounterWrapper>
                <InstructionContainer
                  maxLength={200}
                  {...register("instructions")}
                ></InstructionContainer>
                <InputSymbolsCounter>{`${instructionsLength}/200`}</InputSymbolsCounter>
              </InstructionCounterWrapper>

              {errors.instructions && <p>{errors.instructions.message}</p>}
            </InstructionWrapper>

            <ButtonsWrapper>
              <TrashButton
                type="button"
                // onClick={handleReset}
                onClick={reset}
              ></TrashButton>

              <ActiveButton
                label="Publish"
                type="submit"
              ></ActiveButton>
            </ButtonsWrapper>
          </FormFields>
        </FieldsInput>
      </Form>
    </FormProvider>
  );
};

export default AddRecipeForm;
