import * as yup from "yup";

export const NAME_VALIDATION_RULE = yup.string().required("Ingredient field is required");
export const MEASURE_VALIDATION_RULE = yup.string().required("Measure field is required");

export const addRecipeSchema = yup.object({
  thumb: yup.mixed().required("Photo is required"),
  title: yup.string().required("Title is required"),
  description: yup
    .string()
    .min(10, "Description must not be less than 10 symbols")
    .max(200, "Description must not be more than 200 symbols")
    .required("Description is required"),
  category: yup.string().required("Category is required"),
  area: yup.string().required("Area is required"),
  time: yup
    .number()
    .min(1, "Cooking time must not be less than 1 minute")
    .required("Cooking time is required"),
  instructions: yup
    .string()
    .min(10, "Instructions must not be less than 10 symbols")
    .max(200, "Instructions must not be more than 200 symbols")
    .required("Instructions field is required"),
  ingredients: yup
    .array()
    .of(
      yup.object().shape({
        name: NAME_VALIDATION_RULE,
        measure: MEASURE_VALIDATION_RULE,
      })
    )
    .required("Ingredients are required")
    .min(1, "At least one ingredient is required"),
});
