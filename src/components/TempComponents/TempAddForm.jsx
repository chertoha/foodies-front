import ImageDropZone from "components/ImageDropZone/ImageDropZone";
import { StyledSelect } from "components/CustomSelect/CustomSelect.styled";
import { useGetIngredientsQuery } from "../../redux/ingredients/ingredientsApi";
import { useEffect, useState } from "react";
import { useGetAreasQuery } from "../../redux/areas/areasApi";
import { Controller, FormProvider, useFieldArray, useForm, useFormContext } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LocalStorage } from "services/storage";

const NAME_VALIDATION_RULE = yup.string().required("Ingredient field required");
const MEASURE_VALIDATION_RULE = yup.string().required("Measure field required");

export const addRecipeFormSchema = yup.object({
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

  area: yup.string().required("Area field required"),

  thumb: yup.mixed().required("Image file required"),
});

/* ========================================================================================= */
/* ================================COMMON SELECT============================================ */
/* ========================================================================================= */
const CommonSelect = ({ options, currentValue, name, onChange, placeholder }) => {
  const onOptionChange = option => {
    onChange(option ? option.value : "");
  };

  return (
    <StyledSelect
      classNamePrefix="Select"
      closeMenuOnSelect={true}
      isClearable={true}
      options={options}
      name={name}
      value={options.find(option => option.value === currentValue) || null}
      onChange={onOptionChange}
      placeholder={placeholder}
    />
  );
};
/* ========================================================================================= */
/* ================================COMMON SELECT============================================ */
/* ========================================================================================= */
//
//
//
//
//
//
//
//
//
/* ========================================================================================= */
/* ================================AREA SELECT============================================== */
/* ========================================================================================= */
const AreaSelect = () => {
  const { data: areas } = useGetAreasQuery();
  //   const [area, setArea] = useState(null);

  const { control } = useFormContext();

  if (!areas) return null;

  const options = [
    { value: "", label: "All areas" },
    ...areas.map(({ name }) => ({ value: name, label: name })),
  ];

  return (
    <Controller
      name="area"
      control={control}
      render={({ field: { value, onChange } }) => (
        <CommonSelect
          currentValue={value}
          options={options}
          onChange={onChange}
          placeholder="Areas"
        />
      )}
    />
  );
};
/* ========================================================================================= */
/* ================================AREA SELECT============================================== */
/* ========================================================================================= */
//
//
//
//
//
//
//
//
//
/* ========================================================================================= */
/* ================================INGREDIENT SELECT======================================== */
/* ========================================================================================= */
// eslint-disable-next-line no-unused-vars
const IngredientsSelect = () => {
  const { data: ingredients } = useGetIngredientsQuery();
  const [ingredient, setIngredient] = useState(null);

  if (!ingredients) return null;

  const options = [
    { value: "", label: "All ingredients" },
    ...ingredients.result.map(({ name }) => ({ value: name, label: name })),
  ];

  return (
    <CommonSelect
      name="ingredients"
      currentValue={ingredient}
      options={options}
      onChange={setIngredient}
      placeholder="Ingredients"
    />
  );
};
/* ========================================================================================= */
/* ================================INGREDIENT SELECT======================================== */
/* ========================================================================================= */
//
//
//
//
//
//
//
//
//
/* ========================================================================================= */
/* ================================INGREDIENTS LIST COMPONENT============================== */
/* ========================================================================================= */
const IngredientList = () => {
  const { data: ingredients } = useGetIngredientsQuery();
  const [ingredient, setIngredient] = useState("");
  const [measure, setMeasure] = useState("");

  const {
    formState: { errors },
    setError,
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    name: "ingredients",
  });

  const add = async () => {
    try {
      await NAME_VALIDATION_RULE.validate(ingredient);
      await MEASURE_VALIDATION_RULE.validate(measure);

      if (fields.some(({ name }) => name === ingredient)) {
        alert("ingredient already in list");
        return;
      }

      append({ name: ingredient, measure });
      setIngredient("");
      setMeasure("");

      setError("ingredients", {});
    } catch (err) {
      setError("ingredients", { type: "custom", message: err.errors[0] });
    }
  };

  if (!ingredients) return null;

  const options = [...ingredients.result.map(({ name }) => ({ value: name, label: name }))];

  const getIngredientImage = ingredientName => {
    const ingredient = ingredients.result.find(({ name }) => name === ingredientName);
    return ingredient.img;
  };

  return (
    <>
      <div style={{ display: "flex", columnGap: "30px", width: "100%" }}>
        <div style={{ width: "300px" }}>
          <CommonSelect
            name="ingredientSelect"
            currentValue={ingredient}
            options={options}
            onChange={setIngredient}
            placeholder="Add ingredient"
          />
        </div>

        <input
          type="text"
          placeholder="measure"
          value={measure}
          onChange={e => {
            setMeasure(e.target.value);
          }}
        />

        <button
          type="button"
          onClick={add}
        >
          ADD INGREDIENT +
        </button>
      </div>

      {errors.ingredients && <span>{errors.ingredients.message}</span>}

      <ul style={{ marginTop: "40px" }}>
        {fields.map(({ name, measure }, index) => (
          <li key={name}>
            {name}: {measure}
            <img
              src={getIngredientImage(name)}
              alt=""
            />
            <button
              type="button"
              style={{ marginLeft: "20px" }}
              onClick={() => remove(index)}
            >
              del
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
/* ========================================================================================= */
/* ================================INGREDIENTS LIST COMPONENT============================== */
/* ========================================================================================= */
//
//
//
//
//
//
//
//
//

/* ========================================================================================= */
/* ================================ADD FORM================================================= */
/* ========================================================================================= */
const storage = new LocalStorage("add_recipe_form_data");

const initialValues = {
  ingredients: [{ name: "Olive Oil", measure: "400gr" }],
  area: "Irish",
  thumb: null,
};

const TempAddForm = () => {
  const methods = useForm({
    resolver: yupResolver(addRecipeFormSchema),
    defaultValues: async () => storage.get() || initialValues,
  });
  const { handleSubmit, watch } = methods;

  const watchFields = watch();

  useEffect(() => {
    storage.set(watchFields);
  }, [watchFields]);

  const onSubmit = _data => {
    // console.log(data);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ marginTop: "50px" }}>
            <IngredientList />
          </div>

          <div style={{ width: "300px", marginTop: "50px" }}>
            <AreaSelect />
          </div>

          <div style={{ width: "300px", marginTop: "50px" }}>
            <ImageDropZone name="thumb" />
          </div>

          <div style={{ width: "300px", marginTop: "50px" }}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default TempAddForm;
/* ========================================================================================= */
/* ================================ADD FORM================================================= */
/* ========================================================================================= */
