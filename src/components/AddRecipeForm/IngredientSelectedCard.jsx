import {
  ImageWrapper,
  IngredientItem,
  IngredientsWrapper,
} from "components/RecipeIngredients/RecipeIngredients.styled";
import SpriteIcon from "components/UIKit/SpriteIcon";
import { BtnDelete } from "./AddRecipeForm.styled";
// import { useEffect } from "react";

const IngredientCard = ({ ingredient, onDelete }) => {
  const { _id, name, quantity, img } = ingredient;
  console.log(img);

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
            onClick={() => onDelete(_id)}
            type="button"
          >
            <SpriteIcon
              id="icon-close"
              size={[24, 24, 24]}
            />
          </BtnDelete>
          <span>{name}</span>
          <p>{quantity}</p>
        </IngredientsWrapper>
      </IngredientItem>
    </>
  );
};

export default IngredientCard;
