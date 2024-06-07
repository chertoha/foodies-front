import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import { GridContainer } from "./CategoryList.styled";

const CategoryList = ({ categories }) => {
  return (
    <GridContainer>
      {categories.map(category => (
        <CategoryCard
          key={category.id}
          category={category}
        />
      ))}
    </GridContainer>
  );
};

export default CategoryList;
