import * as yup from "yup";
export const schema = yup.object({
  thumb: yup.mixed().required("Фото є обов'язковим"),
  title: yup.string().required("Назва є обов'язковою"),
  description: yup
    .string()
    .max(200, "Короткий опис не може перевищувати 200 символів")
    .required("Короткий опис є обов'язковим"),
  category: yup.string().required("Категорія є обов'язковою"),
  time: yup
    .number()
    .min(1, "Час приготування повинен бути не менше 1 хвилини")
    .required("Час приготування є обов'язковим"),
  instructions: yup
    .string()
    .max(200, "Інструкція не може перевищувати 200 символів")
    .required("Інструкція є обов'язковою"),
  ingredients: yup.array().of(
    yup.object().shape({
      ingredient: yup.string().required("Інгредієнт є обов'язковим"),
      amount: yup.number().required("Кількість є обов'язковою"),
    })
  ),
});
