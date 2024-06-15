import { useWindowSize } from "../../hooks/useWindowSize";
import { useState } from "react";

import { useGetOwnRecipesQuery } from "../../redux/recipes/recipesApi";

import Loader from "../Loader/Loader";
import Paginator from "../Paginator/Paginator";
import SubTitle from "../SubTitle/SubTitle";
import UserPageListItems from "../UserPageListItems/UserPageListItems";
import { SubTitleWrapper } from "./ProfilePages.styled";

const MyRecipes = () => {
  const { isMobile } = useWindowSize();
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbersToShow = isMobile ? 5 : 8;
  const itemsPerPage = isMobile ? 8 : 12;

  const onPageChange = pageNumber => {
    setCurrentPage(pageNumber);
  };

  const {
    data,
    error: errorMyRecipes,
    isFetching: isFetchingMyRecipes,
    refetch: refetchMyRecipes,
  } = useGetOwnRecipesQuery({
    page: currentPage,
    limit: itemsPerPage,
  });

  // if (isFetchingMyRecipes) return <div>Loading...</div>;
  if (errorMyRecipes) return <div>Error loading recipes.</div>;
  if (!data) return null;

  const totalPages = Math.ceil(data.total / itemsPerPage);

  return (
    <>
      {isFetchingMyRecipes && <Loader />}
      {data.result.length > 0 ? (
        <>
          <UserPageListItems
            recipes={data.result}
            type="myRecipes"
            refetchRecipes={refetchMyRecipes}
          />
          {totalPages > 1 && !errorMyRecipes && (
            <Paginator
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              totalItems={data.total}
              onPageChange={onPageChange}
              pageNumbersToShow={pageNumbersToShow}
            />
          )}
        </>
      ) : (
        <SubTitleWrapper>
          <SubTitle
            label={
              "Nothing has been added to your recipes list yet. Please browse our recipes and add your favorites for easy access in the future."
            }
          />
        </SubTitleWrapper>
      )}
    </>
  );
};

export default MyRecipes;
