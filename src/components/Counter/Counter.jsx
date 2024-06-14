import { useState } from "react";

export const Counter = ({ register, errors }) => {
  const [count, setCount] = useState(1);
  const handleClick = value => {
    if (count === 1 && value === -1) {
      alert("Cooking time cannot be less than 1 minute!");
      return;
    }
    setCount(count + value);
  };
  console.log(count);
  return (
    <>
      <button
        type="button"
        id="addButton"
        onClick={() => handleClick(1)}
      >
        +
      </button>
      <label>
        Cooking time (min):
        <input
          type="text"
          value={count}
          {...register("cookTime")}
        />
      </label>
      {errors.cookTime && <p>{errors.cookTime.message}</p>}
      <button
        type="button"
        id="deductButton"
        onClick={() => handleClick(-1)}
      >
        -
      </button>
    </>
  );
};
