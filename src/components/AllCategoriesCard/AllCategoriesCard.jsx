import React from "react";
import { AllCategoriesCardContainer } from "./AllCategoriesCard.styled";

const AllCategoriesCard = ({ onClick }) => (
  <AllCategoriesCardContainer>
    <button
      onClick={onClick}
      style={{
        color: "white",
        textAlign: "center",
        textDecoration: "none",
      }}
    >
      <h2>ALL CATEGORIES</h2>
    </button>
  </AllCategoriesCardContainer>
);

export default AllCategoriesCard;
