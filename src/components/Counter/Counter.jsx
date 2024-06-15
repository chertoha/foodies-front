import { ButtonTrash } from "components/Buttons/TrashButton/TrashButton.styled";
import SectionTitle from "components/SectionTitle";
import SpriteIcon from "components/UIKit/SpriteIcon";
import {
  StyledButtonWrapper,
  StyledCounter,
  StyledCounterFields,
  StyledCounterValue,
} from "./Counter.styled";

export const Counter = ({ register, errors, count, setCount }) => {
  const handleClick = value => {
    if (count === 1 && value === -1) {
      alert("Cooking time cannot be less than 1 minute!");
      return;
    }
    setCount(prevState => prevState + value);
  };

  return (
    <StyledCounter>
      <SectionTitle label={"Cooking time"} />
      <StyledButtonWrapper>
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

        <StyledCounterFields>
          <StyledCounterValue
            width={count.toString().length * 10}
            value={count}
            type="number"
            readOnly={true}
            {...register("time")}
          />
          <span> min</span>
        </StyledCounterFields>

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
      </StyledButtonWrapper>
    </StyledCounter>
  );
};
