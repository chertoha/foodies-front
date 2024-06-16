import { useEffect, useState } from "react";
import { useGetIngredientsQuery } from "../../redux/ingredients/ingredientsApi";
import IngredientCard from "./IngredientSelectedCard";
import SpriteIcon from "components/UIKit/SpriteIcon";
import { IngredientsList } from "components/RecipeIngredients/RecipeIngredients.styled";
import {
  AddIngredientButton,
  IngredientDescription,
  IngredientQuantity,
  IngredientsSelectorWrapper,
  SelectorIngredientsContainer,
  YulpErrorMessage,
} from "./AddRecipeForm.styled";

// import CustomSelect from "components/CustomSelect";
import { useFieldArray, useFormContext } from "react-hook-form";
import { MEASURE_VALIDATION_RULE, NAME_VALIDATION_RULE } from "./yupValidation";
import { toast } from "react-toastify";
import CommonSelect from "components/UIKit/CommonSelect";
// import { ErrorMessage } from "components/ImageDropZone/ImageDropZone.styled";

// const IngredientSelector = ({ selectedIngredients, setSelectedIngredients }) => {
const IngredientSelector = () => {
  // const { data: ingredients, isLoading, isError } = useGetIngredientsQuery(); // Використовуємо RTK Query для отримання інгредієнтів

  // const [selectedIngredient, setSelectedIngredient] = useState("");
  // const [quantity, setQuantity] = useState("");

  // const handleIngredientChange = (_, value) => {
  //   setSelectedIngredient(value);
  // };

  // const handleQuantityChange = event => {
  //   setQuantity(event.target.value);
  // };

  // const handleAddIngredient = () => {
  //   const isExist = selectedIngredients.some(ing => ing.name === selectedIngredient);
  //   if (isExist) {
  //     alert("This ingredient is already added");
  //     return;
  //   }
  //   const ingredient = ingredients.result.find(ing => ing.name === selectedIngredient);
  //   if (ingredient) {
  //     const newSelectedIngredients = [...selectedIngredients, { ...ingredient, quantity }];
  //     setSelectedIngredients(newSelectedIngredients);
  //     // append({ ...ingredient, quantity });
  //     // setSelectedIngredient("");
  //     // setQuantity("");
  //   }
  // };

  // const handleDeleteIngredient = id => {
  //   const newSelectedIngredients = selectedIngredients.filter(ing => ing._id !== id);
  //   setSelectedIngredients(newSelectedIngredients);
  // };

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error fetching ingredients</div>;
  // if (!ingredients) return null;

  const { data: ingredients } = useGetIngredientsQuery();
  const [ingredient, setIngredient] = useState("");
  const [measure, setMeasure] = useState("");

  const {
    formState: { errors },
    setError,
    clearErrors,
    watch,
  } = useFormContext();

  const ingredientsWatch = watch("ingredients");

  useEffect(() => {
    if (ingredientsWatch.length === 0) {
      setIngredient("");
      setMeasure("");
    }
  }, [ingredientsWatch]);

  const { fields, append, remove } = useFieldArray({
    name: "ingredients",
  });

  const add = async () => {
    try {
      await NAME_VALIDATION_RULE.validate(ingredient);
      await MEASURE_VALIDATION_RULE.validate(measure);

      if (fields.some(({ name }) => name === ingredient)) {
        toast.error(`Ingredient already in list`);
        return;
      }

      append({ name: ingredient, measure });
      setIngredient("");
      setMeasure("");

      // setError("ingredients", {});
      clearErrors("ingredients");
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

  // console.log(errors);

  return (
    <IngredientsSelectorWrapper>
      <IngredientDescription>
        <SelectorIngredientsContainer>
          <CommonSelect
            name="ingredientSelect"
            currentValue={ingredient}
            options={options}
            onChange={setIngredient}
            placeholder="Add the ingredient"
          />
        </SelectorIngredientsContainer>

        <IngredientQuantity
          type="text"
          placeholder="Enter quantity"
          value={measure}
          onChange={e => {
            setMeasure(e.target.value);
          }}
        />
      </IngredientDescription>

      {errors.ingredients && <YulpErrorMessage>{errors.ingredients.message}</YulpErrorMessage>}

      <AddIngredientButton
        type="button"
        onClick={add}
      >
        Add ingredient
        <SpriteIcon
          id="icon-plus"
          size={[20, 22, 22]}
        />
      </AddIngredientButton>
      <IngredientsList>
        {fields.map((ingredient, index) => (
          <IngredientCard
            key={ingredient.name}
            ingredient={{ ...ingredient, img: getIngredientImage(ingredient.name) }}
            onDelete={() => remove(index)}
          />
        ))}
      </IngredientsList>
    </IngredientsSelectorWrapper>
  );
};

export default IngredientSelector;
