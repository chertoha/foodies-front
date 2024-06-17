import Loader from "components/Loader";
import ActiveButton from "components/Buttons/ActiveButton";
import TrashButton from "components/Buttons/TrashButton";
import SectionTitle from "components/SectionTitle";
import IngredientSelector from "./IngredientSelected";
import ImageDropZone from "components/ImageDropZone/ImageDropZone";
import AreaSelector from "./AreaSelector";

import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addRecipeSchema } from "./yupValidation";
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
  YulpErrorMessage,
  IngredientsWrapper,
  SelectorAreas,
} from "./AddRecipeForm.styled";
import { CategoriesSelector } from "./CategoriesSelector";
import { Counter } from "components/Counter/Counter";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import { ROUTES } from "config/router";
import { useRevalidateUser } from "hooks/useRevalidateUser";

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

const _testInitialValues = {
  thumb: null,
  title: "Recipe-Anton-1",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  time: 13,
  category: "Seafood",
  area: "Irish",
  ingredients: [{ name: "Olive Oil", measure: "400gr" }],
  instructions:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, aliquam rerum corporis quia, ea hic quas recusandae facilis mollitia, rem earum! Adipisci repudiandae enim delenitihil.",
};

const AddRecipeForm = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [createRecipe, { isLoading }] = useCreateRecipeMutation();
  const { revalidateUserData } = useRevalidateUser();
  const methods = useForm({
    resolver: yupResolver(addRecipeSchema),
    defaultValues: initialValues,
  });

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = methods;

  const onSubmit = async data => {
    try {
      const formData = new FormData();
      Object.keys(data).forEach(key => {
        if (key === "ingredients") {
          data[key].forEach((ingredient, index) => {
            formData.append(`ingredients[${index}][name]`, ingredient.name);
            formData.append(`ingredients[${index}][measure]`, ingredient.measure);
          });
        } else {
          formData.append(key, data[key]);
        }
      });

      await createRecipe(formData).unwrap();
      revalidateUserData();
      reset(initialValues);
      navigate(`${ROUTES.USER}/${user._id}`);
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const descriptionLength = watch("description")?.length || 0;
  const instructionsLength = watch("instructions")?.length || 0;

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {isLoading && <Loader />}
        <ImageField>
          <ImageDropZone name="thumb" />
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
            {errors.title && <YulpErrorMessage>{errors.title.message}</YulpErrorMessage>}
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
              {errors.description && (
                <YulpErrorMessage>{errors.description.message}</YulpErrorMessage>
              )}
            </DescriptionContainer>

            <CookingCategory>
              <CategoriesSelector />

              <Counter />
            </CookingCategory>

            <SelectorAreas>
              <AreaSelector />
            </SelectorAreas>

            <IngredientsWrapper>
              <SectionTitle label={"Ingredients"} />

              <IngredientSelector />
            </IngredientsWrapper>

            <InstructionWrapper>
              <SectionTitle label={"Recipe Preparation"} />

              <InstructionCounterWrapper>
                <InstructionContainer
                  placeholder="Enter recipe"
                  maxLength={200}
                  {...register("instructions")}
                ></InstructionContainer>
                <InputSymbolsCounter>{`${instructionsLength}/200`}</InputSymbolsCounter>
              </InstructionCounterWrapper>

              {errors.instructions && (
                <YulpErrorMessage>{errors.instructions.message}</YulpErrorMessage>
              )}
            </InstructionWrapper>

            <ButtonsWrapper>
              <TrashButton
                type="button"
                onClick={() => reset(initialValues)}
              ></TrashButton>

              <div>
                <ActiveButton
                  label="Publish"
                  type="submit"
                ></ActiveButton>
              </div>
            </ButtonsWrapper>
          </FormFields>
        </FieldsInput>
      </Form>
    </FormProvider>
  );
};

export default AddRecipeForm;
