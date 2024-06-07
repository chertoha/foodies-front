import React, { useState, useEffect } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import { GridContainer } from "./CategoryList.styled";

const CategoryList = ({ categories }) => {
  const [cardSizes, setCardSizes] = useState([]);

  useEffect(() => {
    let rowHasLargeCard = false;
    const sizes = categories.map((category, index) => {
      const isCardFirstInRow = index % 3 === 0;
      const isCardLastInRow = (index + 1) % 3 === 0;
      if (isCardFirstInRow) {
        if (Math.random() > 0.5) {
          rowHasLargeCard = true;
          return true;
        } else {
          rowHasLargeCard = false;
          return false;
        }
      }
      if (rowHasLargeCard) {
        return false;
      }
      if (!rowHasLargeCard && isCardLastInRow) {
        return true;
      } else {
        return false;
      }
    });
    setCardSizes(sizes);
  }, [categories]);
  return (
    <GridContainer>
      {categories.map((category, index) => (
        <CategoryCard
          large={cardSizes[index]}
          key={category.id}
          category={category}
        />
      ))}
    </GridContainer>
  );
};

export default CategoryList;
