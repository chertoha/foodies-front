import * as yup from "yup";

export const NAME_VALIDATION_RULE = yup.string().required("Ingredient field required");
export const MEASURE_VALIDATION_RULE = yup.string().required("Measure field required");

export const addRecipeSchema = yup.object({
  thumb: yup.mixed().required("Фото є обов'язковим"),
  title: yup.string().required("Назва є обов'язковою"),
  description: yup
    .string()
    .min(10, "ten symbols")
    .max(200, "Короткий опис не може перевищувати 200 символів")
    .required("Короткий опис є обов'язковим"),
  category: yup.string().required("Категорія є обов'язковою"),
  time: yup
    .number()
    .min(1, "Час приготування повинен бути не менше 1 хвилини")
    .required("Час приготування є обов'язковим"),
  instructions: yup
    .string()
    .min(10, "ten symbols")
    .max(200, "Інструкція не може перевищувати 200 символів")
    .required("Інструкція є обов'язковою"),
  ingredients: yup
    .array()
    .of(
      yup.object().shape({
        ingredient: NAME_VALIDATION_RULE,
        measure: MEASURE_VALIDATION_RULE,
      })
    )
    .required("Ingredients are required")
    .min(1, "At least one ingredient is required"),
});
