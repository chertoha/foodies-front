import SpriteIcon from "components/UIKit/SpriteIcon";
import {
  ImageWrapper,
  IngredientItem,
  IngredientsWrapper,
} from "components/RecipeIngredients/RecipeIngredients.styled";
import { BtnDelete } from "./AddRecipeForm.styled";

const IngredientCard = ({ ingredient, onDelete }) => {
  const { name, measure, img } = ingredient;

  return (
    <>
      <IngredientItem>
        <ImageWrapper>
          <img
            src={img}
            alt={name}
          />
        </ImageWrapper>

        <IngredientsWrapper>
          <BtnDelete
            onClick={onDelete}
            type="button"
          >
            <SpriteIcon
              id="icon-close"
              size={[24, 24, 24]}
            />
          </BtnDelete>
          <span>{name}</span>
          <p>{measure}</p>
        </IngredientsWrapper>
      </IngredientItem>
    </>
  );
};

export default IngredientCard;
