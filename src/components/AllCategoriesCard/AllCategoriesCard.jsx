import React from "react";
import { AllCategoriesCardContainer } from "./AllCategoriesCard.styled";

const AllCategoriesCard = ({ onClick }) => (
  <AllCategoriesCardContainer onClick={onClick}>
    <h2>ALL CATEGORIES</h2>
  </AllCategoriesCardContainer>
);

export default AllCategoriesCard;
