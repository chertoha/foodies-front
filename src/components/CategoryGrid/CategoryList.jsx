import React, { useState, useEffect } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import AllCategoriesCard from "../AllCategoriesCard/AllCategoriesCard";
import { List, Row } from "./CategoryList.styled";
import { useWindowSize } from "@uidotdev/usehooks";
import { breakpoints } from "styles/theme";

const gridTemplates = ["1fr 1fr 2fr", "1fr 2fr 1fr", "2fr 1fr 1fr"];
const gridTemplatesTablet = ["1fr 1fr", "1fr"];

const CategoryList = ({
  categories: backendCategories,
  onAllCategoriesClick,
  showAllCategoriesCard,
  onSelectCategory,
}) => {
  const size = useWindowSize();
  const [templateIndexes, setTemplateIndexes] = useState([]);
  const categories = showAllCategoriesCard
    ? [...backendCategories, { all: true }]
    : backendCategories;

  useEffect(() => {
    const cardsPerRow = size.width >= breakpoints.desktop ? 3 : 2;
    const numberOfRows = Math.ceil(categories.length / cardsPerRow);
    const length =
      size.width >= breakpoints.desktop ? gridTemplates.length : gridTemplatesTablet.length;

    if (templateIndexes.length !== numberOfRows) {
      const newTemplateIndexes = [];
      for (let i = 0; i < numberOfRows; i++) {
        let randomIdx;
        do {
          randomIdx = Math.floor(Math.random() * length);
        } while (i > 0 && randomIdx === newTemplateIndexes[i - 1]);
        newTemplateIndexes.push(randomIdx);
      }
      setTemplateIndexes(newTemplateIndexes);
    }
  }, [categories.length, size.width, templateIndexes.length]);

  const rows = [];
  const cardsPerRow = size.width >= breakpoints.desktop ? 3 : 2;

  for (let i = 0; i < categories.length; i += cardsPerRow) {
    rows.push(categories.slice(i, i + cardsPerRow));
  }

  return (
    <List role="list">
      {rows.map((row, i) => (
        <Row
          $template={templateIndexes[i]}
          key={i}
        >
          {row.map((category, index) =>
            category.all ? (
              showAllCategoriesCard && (
                <AllCategoriesCard
                  key="all-categories"
                  large={
                    size.width >= breakpoints.desktop
                      ? row.length === 1 || index === 2
                      : row.length === 1
                  }
                  onClick={onAllCategoriesClick}
                />
              )
            ) : (
              <CategoryCard
                key={category._id}
                category={category}
                onSelectCategory={onSelectCategory}
              />
            )
          )}
        </Row>
      ))}
    </List>
  );
};

export default CategoryList;
