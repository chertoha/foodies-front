import { Counter } from "components/Counter/Counter";
import { useForm } from "react-hook-form";

function AddRecipeForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example")); // you can watch individual input by pass the name of the input

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* photo */}
      <input
        name="recipePhoto"
        type="file"
        alt="The Photo of the Recipe"
        {...register("recipePhoto", { required: true })}
      />
      {errors.exampleRequired && <p>This field is required</p>}
      {/* Title */}
      <input
        name="Recipe Name"
        type="text"
        placeholder="The Name of the Recipe"
        {...register("example", { required: true })}
      />
      {errors.exampleRequired && <p>This field is required</p>}
      {/* Description */}
      <input
        name="description"
        type="text"
        placeholder="Enter a description of the dish"
        {...register("Enter a description of the dish", { required: true })}
      />
      {errors.exampleRequired && <p>This field is required</p>}

      {/* Categories */}
      <label for="categories">Categories:</label>
      <select iD="categories">
        <option value="Dessert">Dessert</option>
        <option value="Appetizer">Appetizer</option>
        <option value="Main Course">Main Course</option>
        <option value="Side Dish">Side Dish</option>
        <option value="Salad">Salad</option>
        <option value="Beverage">Beverage</option>
        <option value="Soup">Soup</option>
        <option value="Bread">Bread</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Dinner">Dinner</option>
        <option value="Lunch">Lunch</option>
      </select>
      {/* Cooking Time */}
      <Counter></Counter>

      {/* Preparartion */}
      <input
        type="text"
        placeholder="Enter Recipe"
      />
    </form>
  );
}

export default AddRecipeForm;
