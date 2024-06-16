import { ButtonTrash } from "components/Buttons/TrashButton/TrashButton.styled";
import SectionTitle from "components/SectionTitle";
import SpriteIcon from "components/UIKit/SpriteIcon";
import {
  StyledButtonWrapper,
  StyledCounter,
  StyledCounterFields,
  StyledCounterValue,
} from "./Counter.styled";
import { toast } from "react-toastify";
import { Controller, useFormContext } from "react-hook-form";

export const Counter = () => {
  const {
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();

  // const watchFields = watch();
  // console.log(watchFields);

  // const [count, setCount] = useState(1);

  // const handleClick = value => {
  //   if (count === 1 && value === -1) {
  //     // alert("Cooking time cannot be less than 1 minute!");
  //     toast.error(`Cooking time cannot be less than 1 minute!`);
  //     return;
  //   }
  //   setCount(prevState => prevState + value);
  // };

  const increment = () => {
    setValue("time", getValues("time") + 1);
  };

  const decrement = () => {
    const currentValue = getValues("time");
    if (currentValue === 1) {
      toast.error(`Cooking time cannot be less than 1 minute!`);
      return;
    }
    setValue("time", currentValue - 1);
  };

  return (
    <StyledCounter>
      <SectionTitle label={"Cooking time"} />
      <Controller
        name="time"
        control={control}
        render={({ field }) => (
          <StyledButtonWrapper>
            <ButtonTrash
              type="button"
              // id="addButton"
              // onClick={() => handleClick(1)}
              onClick={increment}
            >
              <SpriteIcon
                id="icon-plus"
                size={[20, 22, 22]}
              />
            </ButtonTrash>

            <StyledCounterFields>
              <StyledCounterValue
                width={field.value.toString().length * 10}
                // value={count}
                readOnly={true}
                type="number"
                {...field}
                // {...register("time")}
              />
              <span>min</span>
            </StyledCounterFields>

            {errors.cookTime && <p>{errors.cookTime.message}</p>}
            <ButtonTrash
              type="button"
              // id="deductButton"
              // onClick={() => handleClick(-1)}
              onClick={decrement}
            >
              <SpriteIcon
                id="icon-minus"
                size={[20, 22, 22]}
              />
            </ButtonTrash>
          </StyledButtonWrapper>
        )}
      />
    </StyledCounter>
  );
};
