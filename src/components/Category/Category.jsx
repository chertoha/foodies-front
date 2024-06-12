import React, { useEffect, useState } from "react";
import { useLazyGetCategoriesQuery } from "../../redux/categories/categoriesApi";
import CategoryList from "../CategoryGrid/CategoryList";
import MainTitle from "components/MainTitle";
import SubTitle from "components/SubTitle";
import { MainTitleWrapper, SubTitleWrapper } from "./Category.styled";

const Category = () => {
  const [page, setPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [getCategories, { data, isFetching }] = useLazyGetCategoriesQuery();

  useEffect(() => {
    getCategories({ page, limit: 11 });
  }, [page, getCategories]);

  useEffect(() => {
    if (data) {
      setCategories(prev => [...prev, ...data.result]);
      if (data.result.length < 11) {
        setHasMore(false); // If less than 11 categories are returned, assume no more categories are available
      }
    }
  }, [data]);

  const handleAllCategoriesClick = () => {
    setPage(prev => prev + 1);
  };

  if (isFetching && page === 1) return <div>Loading...</div>;

  return (
    <>
      <MainTitleWrapper>
        <MainTitle label={"Categories"} />
      </MainTitleWrapper>
      <SubTitleWrapper>
        <SubTitle
          label={
            "Discover a limitless world of culinary possibilities and enjoy exquisite recipes that combine taste, style and the warm atmosphere of the kitchen."
          }
        />
      </SubTitleWrapper>
      <CategoryList
        onAllCategoriesClick={handleAllCategoriesClick}
        categories={categories}
        showAllCategoriesCard={hasMore}
      />
    </>
  );
};

export default Category;
