import React from "react";
import {
  CardContainer,
  CardImage,
  CardBadge,
  CardButton,
} from "../CategoryCard/CategoryCard.styled";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <CardContainer>
      <CardImage
        src={category.image}
        alt={category.name}
      />
      <CardBadge>{category.name}</CardBadge>
      <Link to={`/recipes/${category.id}`}>
        <CardButton>→</CardButton>
      </Link>
    </CardContainer>
  );
};

export default CategoryCard;
