import React from "react";
import { useGetCategoriesQuery } from "../../redux/categories/categoriesApi";
import CategoryList from "../CategoryGrid/CategoryList";
import MainTitle from "components/MainTitle";
import SubTitle from "components/SubTitle";
import Container from "components/Container";

const Category = () => {
  const { data, error, isFetching } = useGetCategoriesQuery();

  if (isFetching) return <div>Loading...</div>;
  if (error) return <div>Error loading categories.</div>;

  return (
    <Container>
      <MainTitle label={"Categories"}></MainTitle>
      <SubTitle
        label={
          "Discover a limitless world of culinary possibilities and enjoy exquisite recipes that combine taste, style and the warm atmosphere of the kitchen."
        }
      ></SubTitle>
      <CategoryList categories={data} />
    </Container>
  );
};

export default Category;
