import React from "react";
import {
  CardContainer,
  CardImage,
  CardBadge,
  CardButton,
  ButtonsContainer,
} from "../CategoryCard/CategoryCard.styled";
import { Link } from "react-router-dom";

const CategoryCard = ({ category, large }) => {
  return (
    <CardContainer $large={large}>
      <Link to={`/recipes/${category.id}`}>
        <CardImage
          src={category.img}
          alt={category.name}
        />
        <ButtonsContainer>
          <CardBadge>{category.name}</CardBadge>
          <CardButton>→</CardButton>
        </ButtonsContainer>
      </Link>
    </CardContainer>
  );
};

const AllCategoriesCard = large => (
  <CardContainer
    $large={large}
    style={{ backgroundColor: "black" }}
  >
    <Link
      to="/categories/all"
      style={{
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        textDecoration: "none",
      }}
    >
      <h2>ALL CATEGORIES</h2>
    </Link>
  </CardContainer>
);

export { CategoryCard, AllCategoriesCard };
