import React, { useState, useEffect } from "react";
import { CategoryCard, AllCategoriesCard } from "../CategoryCard/CategoryCard";
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

  const displayedCategories = categories.slice(0, Math.ceil(categories.length / 2));

  return (
    <GridContainer>
      {displayedCategories.map((category, index) => (
        <CategoryCard
          large={cardSizes[index]}
          key={category.id}
          category={category}
        />
      ))}
      <AllCategoriesCard />
    </GridContainer>
  );
};

export default CategoryList;
