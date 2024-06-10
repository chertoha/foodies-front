import { useState, useEffect } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api, BASE_URL, axiosBaseQuery } from "../../services/api";

// Валідаційна схема з Yup
const schema = yup.object().shape({
  photo: yup.mixed().required("Фото є обов'язковим"),
  title: yup.string().required("Назва є обов'язковою"),
  description: yup
    .string()
    .max(200, "Короткий опис не може перевищувати 200 символів")
    .required("Короткий опис є обов'язковим"),
  category: yup.string().required("Категорія є обов'язковою"),
  cookTime: yup
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

const AddRecipeForm = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients",
  });

  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    // Отримання категорій з backend
    axiosBaseQuery("/api/categories").then(response => {
      setCategories(response.data);
    });

    // Отримання інгредієнтів з backend
    axiosBaseQuery("/api/ingredients").then(response => {
      setIngredients(response.data);
    });
  }, []);

  const onSubmit = async data => {
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

      const response = await axiosBaseQuery("/api/recipes", formData);
      if (response.status === 200) {
        // Перенаправлення на сторінку користувача
        window.location.href = "/user";
      }
    } catch (error) {
      alert("Помилка: " + error.message);
    }
  };

  const handleReset = () => {
    reset();
    setPreview(null);
  };

  const handlePhotoChange = e => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setValue("photo", file);
    }
  };

  const descriptionLength = watch("description")?.length || 0;
  const instructionsLength = watch("instructions")?.length || 0;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          Фото рецепта:
          <input
            type="file"
            onChange={handlePhotoChange}
          />
        </label>
        {preview && (
          <img
            src={preview}
            alt="Recipe preview"
            width="100"
          />
        )}
        {errors.photo && <p>{errors.photo.message}</p>}
      </div>

      <div>
        <label>
          Назва рецепта:
          <input
            type="text"
            {...register("title")}
          />
        </label>
        {errors.title && <p>{errors.title.message}</p>}
      </div>

      <div>
        <label>
          Короткий опис:
          <input
            type="text"
            {...register("description")}
          />
          <p>{`Символів: ${descriptionLength}/200`}</p>
        </label>
        {errors.description && <p>{errors.description.message}</p>}
      </div>

      <div>
        <label>
          Категорія:
          <select {...register("category")}>
            {categories.map(category => (
              <option
                key={category.id}
                value={category.name}
              >
                {category.name}
              </option>
            ))}
          </select>
        </label>
        {errors.category && <p>{errors.category.message}</p>}
      </div>

      <div>
        <label>
          Час приготування (хвилини):
          <input
            type="number"
            {...register("cookTime")}
          />
        </label>
        {errors.cookTime && <p>{errors.cookTime.message}</p>}
      </div>

      <div>
        <label>
          Інгредієнти:
          <button
            type="button"
            onClick={() => append({ ingredient: "", amount: 1 })}
          >
            Add ingredient+
          </button>
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
              <button
                type="button"
                onClick={() => remove(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </label>
      </div>

      <div>
        <label>
          Інструкція:
          <textarea {...register("instructions")}></textarea>
          <p>{`Символів: ${instructionsLength}/200`}</p>
        </label>
        {errors.instructions && <p>{errors.instructions.message}</p>}
      </div>

      <div>
        <button
          type="button"
          onClick={handleReset}
        >
          Очистити
        </button>
        <button type="submit">Опублікувати</button>
      </div>
    </form>
  );
};

export default AddRecipeForm;
