import React, { useEffect, useState } from "react";
import { useLazyGetCategoriesQuery } from "../../redux/categories/categoriesApi";
import CategoryList from "../CategoryGrid/CategoryList";
import MainTitle from "components/MainTitle";
import SubTitle from "components/SubTitle";
import { MainTitleWrapper, SubTitleWrapper } from "./Category.styled";

const Category = ({ onSelectCategory }) => {
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
        setHasMore(false);
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
        onSelectCategory={onSelectCategory}
        onAllCategoriesClick={handleAllCategoriesClick}
        categories={categories}
        showAllCategoriesCard={hasMore}
      />
    </>
  );
};

export default Category;

// export const CategoryTest = ({ onSelectCategory }) => {
//   const categories = ["Seafood", "Dessert", "Breakfast"];

//   return (
//     <div>
//       {categories.map(category => (
//         <button
//           key={category}
//           onClick={() => onSelectCategory(category)}
//         >
//           {category}
//         </button>
//       ))}
//     </div>
//   );
// };
