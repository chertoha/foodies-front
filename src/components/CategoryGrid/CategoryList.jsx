import React, { useState, useEffect } from "react";
import { CategoryCard } from "../CategoryCard/CategoryCard";
import styled from "styled-components";
import theme, { breakpoints } from "styles/theme";
import { useWindowSize } from "@uidotdev/usehooks";
import AllCategoriesCard from "components/AllCategoriesCard/AllCategoriesCard";

const gridTemplates = ["1fr 1fr 2fr", "1fr 2fr 1fr", "2fr 1fr 1fr"];
const gridTemplatesTablet = ["1fr 1fr", "1fr"];

const List = styled("div")`
  display: grid;
  row-gap: 20px;
`;

const Row = styled("div")`
  display: grid;
  column-gap: 20px;
  row-gap: 20px;
  grid-template-columns: 1fr;
  ${theme.mq.tablet} {
    grid-template-columns: ${p => gridTemplatesTablet[p.$template]};
  }
  ${theme.mq.desktop} {
    grid-template-columns: ${p => gridTemplates[p.$template]};
  }
`;

const CategoryList = ({ categories: backendCategories }) => {
  const size = useWindowSize();
  const [templateIndexes, setTemplateIndexes] = useState([]);
  const categories = [...backendCategories, { all: true }];
  useEffect(() => {
    if (templateIndexes.length === 0 || categories.length !== templateIndexes.length) {
      const cardsPerRow = size.width >= breakpoints.desktop ? 3 : 2;
      const numberOfRows = Math.ceil(categories.length / cardsPerRow);
      const length =
        size.width >= breakpoints.desktop ? gridTemplates.length : gridTemplatesTablet.length;
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
  }, [categories.length]);

  const rows = [];
  const cardsPerRow = size.width >= breakpoints.desktop ? 3 : 2;

  for (let i = 0; i < categories.length; i += cardsPerRow) {
    rows.push(categories.slice(i, i + cardsPerRow));
  }

  return (
    <List>
      {rows.map((row, i) => (
        <Row
          $template={templateIndexes[i]}
          key={i}
        >
          {row.map(category =>
            category?.all ? (
              <AllCategoriesCard />
            ) : (
              <CategoryCard
                key={category._id}
                category={category}
              ></CategoryCard>
            )
          )}
        </Row>
      ))}
    </List>
  );
};

export default CategoryList;
