import { StyledButton } from "components/Buttons/ActiveButton/ActiveButton.styled";
import { ButtonTrash } from "components/Buttons/TrashButton/TrashButton.styled";
import SpriteIcon from "components/UIKit/SpriteIcon";
import { useRef, useState } from "react";

export const Counter = ({ register, errors, count, setCount }) => {
  const handleClick = value => {
    if (count === 1 && value === -1) {
      alert("Cooking time cannot be less than 1 minute!");
      return;
    }
    setCount(prevState => prevState + value);
  };

  return (
    <>
      <ButtonTrash
        type="button"
        id="addButton"
        onClick={() => handleClick(1)}
      >
        <SpriteIcon
          id="icon-plus"
          size={[20, 22, 22]}
        />
      </ButtonTrash>
      <label htmlFor="cookTime">
        Cooking time:
        <input
          value={count}
          type="number"
          {...register("cookTime")}
        />
      </label>
      {errors.cookTime && <p>{errors.cookTime.message}</p>}
      <ButtonTrash
        type="button"
        id="deductButton"
        onClick={() => handleClick(-1)}
      >
        <SpriteIcon
          id="icon-minus"
          size={[20, 22, 22]}
        />
      </ButtonTrash>
    </>
  );
};
