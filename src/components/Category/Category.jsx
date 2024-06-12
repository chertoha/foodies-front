import React from "react";
import { useGetCategoriesQuery } from "../../redux/categories/categoriesApi";
import CategoryList from "../CategoryGrid/CategoryList";
import MainTitle from "components/MainTitle";
import SubTitle from "components/SubTitle";
import { MainTitleWrapper, SubTitleWrapper } from "./Category.styled";

const Category = ({ onSelectCategory }) => {
  const { data, error, isFetching } = useGetCategoriesQuery({ page: 1, limit: 11 });
  console.log(data);

  if (!data) return null;
  if (isFetching) return <div>Loading...</div>;
  if (error) return <div>Error loading categories.</div>;

  return (
    <>
      <MainTitleWrapper>
        <MainTitle label={"Categories"}></MainTitle>
      </MainTitleWrapper>
      <SubTitleWrapper>
        <SubTitle
          label={
            "Discover a limitless world of culinary possibilities and enjoy exquisite recipes that combine taste, style and the warm atmosphere of the kitchen."
          }
        ></SubTitle>
      </SubTitleWrapper>
      <CategoryList
        onClickCategory={onSelectCategory}
        categories={data.result}
      />
    </>
  );
};

export default Category;

export const CategoryTest = ({ onSelectCategory }) => {
  const categories = ["Seafood", "Dessert", "Breakfast"];

  return (
    <div>
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
