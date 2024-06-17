import React from "react";
import SpriteIcon from "components/UIKit/SpriteIcon";
import {
  CardContainer,
  CardImage,
  CardBadge,
  CardButton,
  ButtonsContainer,
} from "./CategoryCard.styled";

const CategoryCard = ({ category, large, onSelectCategory }) => {
  return (
    <CardContainer
      $large={large}
      role="listitem"
    >
      <CardImage
        loading="lazy"
        src={category.img}
        alt={category.name}
      />
      <ButtonsContainer>
        <CardBadge>{category.name}</CardBadge>
        <CardButton
          aria-label={`Open category ${category.name}`}
          type="button"
          onClick={() => onSelectCategory(category.name)}
        >
          <SpriteIcon
            id="icon-arrow-up-right"
            size={[18, 18, 18]}
          />
        </CardButton>
      </ButtonsContainer>
    </CardContainer>
  );
};

export default CategoryCard;
